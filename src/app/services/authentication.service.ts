import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { EnvService } from './env.service';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
// Goal is a role based login. A normal User should only be able to see whats for his eyes. An admin for example needs to see more. In this app we will use 3 different roles.

export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private storage: Storage, private router: Router, private http: HttpClient, private env: EnvService, ) {
    if (localStorage.getItem('isLoggedin')) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('isLoggedin')));
      this.currentUser = this.currentUserSubject.asObservable();
    } else {
      this.currentUserSubject = new BehaviorSubject<User>(null);
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }


  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public get getCurrentUser(): Observable<User> {
    return this.currentUser;
  }



  login(username: string, password: string) {
    let user = new User(username, password, window.btoa(username + ':' + password));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + user.authData
      })
    };
    return this.http.get<string[]>(`${environment.apiUrl}/login`, httpOptions)
      .pipe(map(authorities => {
        if (authorities.includes('ROLE_EMPLOYEE')) {
          user.setRole('ROLE_EMPLOYEE');
          this.currentUserSubject.next(user);
          localStorage.setItem('isLoggedin', JSON.stringify(user));
          return 'ROLE_EMPLOYEE';
        }
        if (authorities.includes('ROLE_PARENT')) {
          user.setRole('ROLE_PARENT');
          this.currentUserSubject.next(user);
          localStorage.setItem('isLoggedin', JSON.stringify(user));
          return 'ROLE_PARENT';
        }
        return '';
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('isLoggedin');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/login');
  }

  register(fName: String, lName: String, email: String, password: String) {
    return this.http.post(this.env.API_URL + 'REGISTRIERUNG',
      { fName: fName, lName: lName, email: email, password: password }
    )
  }

  childRegister(fname: String, lname: String, bday: String, school: String, schoolClass: String, username: String, password: String, passwordRepeat: String) {
    return this.http.post(this.env.API_URL + 'REGISTRIERUNG',
      { fname: fname, lname: lname, bday: bday, school: school, schoolClass: schoolClass, username: username, password: password, passwordRepeat: passwordRepeat }
    )
  }
}

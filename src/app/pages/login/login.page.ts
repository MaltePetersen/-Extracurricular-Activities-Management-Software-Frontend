import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //
  user = {
    email: '',
    pw: ''
  };

  // The login will call the AuthenticationService and retrieves the observable with the role from there.
  constructor(private auth: AuthenticationService, private router: Router, public http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${this.user.email}:${this.user.pw}`)
      })
    };

    this.http.get<GrantedAuthority[]>('https://fjoerde.herokuapp.com/login', httpOptions).subscribe((a) => {
      if (a[0].authority === 'ROLE_PARENT') {
        localStorage.setItem('isLoggedin', 'true');
        console.log(a[0].authority + '  = (Rolle vom Server) ');
        this.router.navigateByUrl('/erziehungsberechtigte-dashboard');
      }
    });
    
    // you need to subscribe to the returned observable. From there you can handle the data.
    this.auth.login(this.user).subscribe(user => {
      console.log('after login: ', user);
      // the navigation will happen by the returned value from the observable.
      const role = user.role;
      if (role === 'BETREUER') {
        this.router.navigateByUrl('/schulauswahl');
      } else if (role === 'ERZIEHUNGSBERECHTIGTE') {
        this.router.navigateByUrl('/erziehungsberechtigte-dashboard');
      }
    });

  }

  register() {
    console.log('Registrierung pressed');
    this.router.navigateByUrl('/registrierung');
  }
}

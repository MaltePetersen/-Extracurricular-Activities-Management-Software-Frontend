import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import {Storage} from '@ionic/storage';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
// Goal is a role based login. A normal User should only be able to see whats for his eyes. An admin for example needs to see more. In this app we will use 3 different roles.

export class AuthenticationService {
  user: Observable<any>;
  //The BehaviorSubject holds the value that needs to be shared with other components. These components subscribe to data which is simple returning the BehaviorSubject value without the functionality to change the value
  private authenticationState = new BehaviorSubject(null);

 constructor(private storage: Storage, private router: Router) {
   this.loadUser();
   //The Observer and Objects interfaces provide a generalized mechanism for push-based notification, also known as the observer design pattern. The Observable object represents the object that sends notifications (the provider); the Observer object represents the class that receives them (the observer). 
   // The asObservable gets its data from the BehaviorSubject
   //the pipe and filter will make sure that only expressions are returned that are not null. The auth guard will wait for a response
   this.user = this.authenticationState.asObservable().pipe(filter(response => response));
  }

  //retrive the user token from the storage to make sure in the beginning that the still authenticated user can navigate trough the pages and is not blocked by the guard.
  loadUser() {
    this.storage.get(TOKEN_KEY).then(data => {
      if (data){
        this.authenticationState.next(data);
      } else {
        this.authenticationState.next({email: null, role: null });
      }
    });
  }

    login(credentials): Observable<any> {
      // first retrieve the data from the credentials after that send it to the backend which replies with a token of some sort. This needs to be implemented here. 

      let email = credentials.email;
      let pw = credentials.pw;
      let user = null;

      // Check with your token which role applies to you.
  
      if (email === 'leitung' && pw === 'leitung') {
        user = {email, role: 'LEITUNG'};
      } else if (email === 'betreuer' && pw === 'betreuer') {
        user = {email, role: 'BETREUER'};
      } else if (email === 'eltern' && pw === 'eltern') {
        user = {email, role: 'ERZIEHUNGSBERECHTIGTE'};
      }
      this.authenticationState.next(user);

      //Save the returned Token or Json inside the storage of the device (localy).
      this.storage.set(TOKEN_KEY, user);

      // make the user object into an observable and return it.
      return of(user);
    }

    //logout the user and delete the saved token from the device. then move back to login page.
    async logout() {
      await this.storage.set(TOKEN_KEY, null);
      this.authenticationState.next(null);
      this.router.navigateByUrl('/login');
    }
  }

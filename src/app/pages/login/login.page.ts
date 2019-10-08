import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

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

  //The login will call the AuthenticationService and retrieves the observable with the role from there.
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    // you need to subscribe to the returned observable. From there you can handle the data.
    this.auth.login(this.user).subscribe(user => {
      console.log('after login: ', user);
      // the navigation will happen by the returned value from the observable.
      let role = user['role'];
      if (role === 'LEITUNG') {
        this.router.navigateByUrl('/fjoerde-leitung-dashboard');
      } else if (role === 'BETREUER') {
        this.router.navigateByUrl('/betreuer-dashboard');
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

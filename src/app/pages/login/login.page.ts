import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
let headers = new HttpHeaders();
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //
  user = {
    email: '',
    pw: '',
    role: ''
  };

  // The login will call the AuthenticationService and retrieves the observable with the role from there.
  constructor(private auth: AuthenticationService, private router: Router, public http: HttpClient) { }

  ngOnInit() {
  this.debugAPI();
  }
  debugAPI() {
    headers = headers.append("Authorization", "Basic " + 'UGFyZW50X1Rlc3Q6cGFzc3dvcmQ=');
    headers = headers.append('Content-Type', 'application/json');

    
  
    this.http.get('https://backend.softwareprojekt-kiel.de/api/parent/children', {headers}).subscribe((test)=> console.table(test));
  
  }

  login() {
    this.auth.login(this.user.email, this.user.pw).subscribe((role) => {
      if (role === 'ROLE_EMPLOYEE'){
        this.router.navigateByUrl('/employee/schulauswahl');
      }
      if (role === 'ROLE_PARENT'){
      this.router.navigateByUrl('parent/erziehungsberechtigte-dashboard');
    }});
  }



  register() {
    console.log('Registrierung pressed');
    this.router.navigateByUrl('/registrierung');
  }
}

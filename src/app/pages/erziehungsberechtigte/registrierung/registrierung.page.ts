import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.page.html',
  styleUrls: ['./registrierung.page.scss'],
})
export class RegistrierungPage implements OnInit {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log('Registrierung pressed');
    this.router.navigateByUrl('/registrierung');
  }

  login() {
    console.log('Registrierung pressed');
    this.router.navigateByUrl('/login');
  }


}

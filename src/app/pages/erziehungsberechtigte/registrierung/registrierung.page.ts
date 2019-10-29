import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService} from 'src/app/services/alert.service';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.page.html',
  styleUrls: ['./registrierung.page.scss'],
})
export class RegistrierungPage implements OnInit {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};

  constructor(private router: Router, private auth: AuthenticationService, private alertService: AlertService) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    this.auth.register(form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast(data['message']);
        this.router.navigateByUrl('/login');
      },
      error => {
        console.log(error);
        this.router.navigateByUrl('/login');
      },
      () => {

      }
    );
  }

  login() {

    this.router.navigateByUrl('/login');
  }


}

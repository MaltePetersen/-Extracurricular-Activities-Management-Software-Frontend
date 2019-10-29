import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kind-hinzufuegen',
  templateUrl: './kind-hinzufuegen.page.html',
  styleUrls: ['./kind-hinzufuegen.page.scss'],
})
export class KindHinzufuegenPage implements OnInit {
  responseData : any;
  childData = {fname: String,  lname: String,  bday: String,  school: String,  schoolClass: String,  username: String,  password: String,  passwordRepeat: String};

  constructor(private router: Router, private auth: AuthenticationService, private alertService: AlertService) { }

  ngOnInit() {
  }

  kindAnlegen(form: NgForm) {
    this.auth.childRegister(form.value.fname,  form.value.lname,  form.value.bday,  form.value.school,  form.value.schoolClass,  form.value.username,  form.value.password,  form.value.passwordRepeat).subscribe(
      data => {
        this.alertService.presentToast('Ihr Kind wurde erfolgreich angelegt.');
        this.router.navigateByUrl('/kind-uebersicht');
      },
      error => {
        console.log(error);
        this.alertService.presentToast('Es gab einen Fehler bei der Erstellung');
        this.router.navigateByUrl('/kind-uebersicht');
      },
      () => {

      }
    );
  }


  navToKindUebersicht(){ this.router.navigateByUrl('/kind-uebersicht')}

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UsernameValidator } from '../registrierung/username.validator';
import { PasswordValidator } from '../registrierung/password.validator';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kind-hinzufuegen',
  templateUrl: './kind-hinzufuegen.page.html',
  styleUrls: ['./kind-hinzufuegen.page.scss'],
})
export class KindHinzufuegenPage implements OnInit {
  

  schule: any;
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  responseData : any;
  constructor(public http: HttpClient, private router: Router, private auth: AuthenticationService, private alertService: AlertService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getSchool();
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    this.validations_form = this.formBuilder.group({
      // username: new FormControl('', Validators.compose([
      //   UsernameValidator.validUsername,
      //   Validators.maxLength(25),
      //   Validators.minLength(5),
      //   Validators.pattern('^(?=.*[a-zA-Z])||(?=.*[0-9])[a-zA-Z0-9]+$'),
      //   Validators.required
      // ])),
      // matching_passwords: this.matching_passwords_group,
      name: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      school: new FormControl('', Validators.required),
      schoolClass: new FormControl('', Validators.required)
    });
  }

  getSchool() {
    this.http.get<school[]>(`${environment.apiUrl}/api/schools`).subscribe((a) => {
      this.schule = a;
      console.log("ERFOLG SCHULE GELADEN")
      console.log(this.schule)
    });
  }

  // chooseSchool(schoolname: any){

  //   // let schooldata = schoolname.target.value.toString().split(" ");
  //   // let name = schoolname[0].toString();
  //   // let id  = schoolname[1].toString();

  //   console.log("NAME" + name)
  //   //console.log("schooldata" + schooldata)
  // }

  createChild(){


  }

  abort(){
    this.router.navigateByUrl('/kind-uebersicht');
  }

  validation_messages = {
    'username': [
      { type: 'required', message: 'Nutzername muss angegeben werden.' },
      { type: 'minlength', message: 'Nutzername muss mind. 5 Zeichen lang sein.' },
      { type: 'maxlength', message: 'Nutzername darf nicht länger als 25 Zeichen sein.' },
      { type: 'pattern', message: 'Nutzername darf nur aus Zahlen oder Buchstaben bestehen.' },
      { type: 'validUsername', message: 'Nutzername ist bereits vergeben.' }
    ],
    'password': [
      { type: 'required', message: 'Passwort wird benötigt.' },
      { type: 'minlength', message: 'Passwort muss mind. 5 Zeichen lang sein.' },
      { type: 'pattern', message: 'Passwort muss mind. einen Großbuchstaben, einen Kleinbuchstaben und eine Nummer beinhalten.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Passwortbestätigung ist notwendig' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Passwort stimmt nicht überein.' }
    ],
    'name': [
      { type: 'required', message: 'Vorname ist notwendig.' }
    ],
    'lname': [
      { type: 'required', message: 'Nachname ist notwendig.' }
    ],
    'school': [
      { type: 'required', message: 'Schule ist notwendig.' },
    ],
    'schoolClass': [
      { type: 'required', message: 'Klasse ist notwendig.' },
    ],
  };

  onSubmit(values) {
    console.log(values);
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

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UsernameValidator } from '../registrierung/username.validator';
import { PasswordValidator } from '../registrierung/password.validator';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Children } from 'src/app/models/children';
import { CountryPhone } from 'src/app/models/country-phone.model';
import { PhoneValidator } from 'src/app/pages/erziehungsberechtigte/registrierung/phone.validator';

@Component({
  selector: 'app-kind-hinzufuegen',
  templateUrl: './kind-hinzufuegen.page.html',
  styleUrls: ['./kind-hinzufuegen.page.scss'],
})
export class KindHinzufuegenPage implements OnInit {


  lastName: string;
  firstName: string;
  schoolname: string;
  classname: string;
  phonenumber: string;

  child: Children = new Children('Sesamstraße', 'a@bc.de', 'Peter Pan', '123456', '', '', '', true, '', '', '');
  postId: any;
  schule: any;
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;
  countries: Array<CountryPhone>;
  
  responseData: any;

  constructor(public http: HttpClient, private router: Router, private auth: AuthenticationService, private alertService: AlertService, public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.countries = [
      new CountryPhone('DE', 'Germany'),
    ];

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
    let country = new FormControl(this.countries[0], Validators.required);
    let phone = new FormControl('', Validators.compose([
    Validators.required,
    PhoneValidator.validCountryPhone(country)
      ]));
      this.country_phone_group = new FormGroup({
        country: country,
        phone: phone
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
      country_phone: this.country_phone_group,
      school: new FormControl('', Validators.required),
      schoolClass: new FormControl('', Validators.required)
    });
  }


  


  createChild() {
    const postData = {
      "address": "null",
      "email": "null",
      "fullname": "TEST Pan",
      "iban": "123456",
      "password": "string",
      "phoneNumber": "string",
      "schoolClass": "string",
      "schoolCoordinator": true,
      "subject": "string",
      "userType": "ROLE_CHILD",
      "username": "null"
};

    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    let requestoptions = {
      // headers: new HttpHeaders().set('Content-Type', 'application/json'),
      body: JSON.stringify(postData)
    }

    console.log("POST");
    // tslint:disable-next-line: max-line-length
    this.http.post(`${environment.apiUrl}/api/parent/child`, postData,
      // {
      //   //   'username': "Parent_Test",
      //   //   'password': "password",
      //   // },
        {
        headers: {
          'content-type': 'application/JSON',
        }
      },
    ).subscribe({
      next: data => console.log("Success! " + data),
      error: error => console.error('There was an error!', error),
    });

  }

  



  abort() {
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
    'phone': [
      // { type: 'required', message: 'Telefonnummer ist notwendig.' },
      { type: 'validCountryPhone', message: 'Keine gültige Telefonnummer.' }
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
    // this.auth.childRegister(form.value.fname,  form.value.lname,  form.value.bday,  form.value.school,  form.value.schoolClass,  form.value.username,  form.value.password,  form.value.passwordRepeat).subscribe(
    //   data => {
    //     this.alertService.presentToast('Ihr Kind wurde erfolgreich angelegt.');
    //     this.router.navigateByUrl('/kind-uebersicht');
    //   },
    //   error => {
    //     console.log(error);
    //     this.alertService.presentToast('Es gab einen Fehler bei der Erstellung');
    //     this.router.navigateByUrl('/kind-uebersicht');
    //   },
    //   () => {

    //   }
    // );
  }


  navToKindUebersicht() { this.router.navigateByUrl('/kind-uebersicht') }

}

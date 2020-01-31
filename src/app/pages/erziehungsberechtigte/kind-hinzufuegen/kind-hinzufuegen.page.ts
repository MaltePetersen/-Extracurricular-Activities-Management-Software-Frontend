import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import {  Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PasswordValidator } from '../registrierung/password.validator';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CountryPhone } from 'src/app/models/country-phone.model';
import { PhoneValidator } from 'src/app/pages/erziehungsberechtigte/registrierung/phone.validator';
import { KindUebersichtPage } from '../kind-uebersicht/kind-uebersicht.page';
import { ParentControllerService } from 'src/app/api/services';
import { SchoolDTO, ChildDTO } from 'src/app/api/models';

@Component({
  selector: 'app-kind-hinzufuegen',
  templateUrl: './kind-hinzufuegen.page.html',
  styleUrls: ['./kind-hinzufuegen.page.scss'],
})
export class KindHinzufuegenPage implements OnInit {

  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;
  countries: Array<CountryPhone>;
  schools: SchoolDTO[];

  constructor(public http: HttpClient, private router: Router,  private alertService: AlertService, public formBuilder: FormBuilder, private parentController:ParentControllerService) { }

  ngOnInit() {
  this.getSchools();
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

  getSchools() {
    this.parentController.getSchoolsUsingGET1().toPromise().then((schools)=>{
      this.schools = schools;
    }).catch((error)=>{
      console.log(error);
    });
  }

  createChild() {
    let fullname = this.validations_form.get('name').value + ' ' + this.validations_form.get('lname').value;
    let schoolClass = this.validations_form.get('schoolClass').value;
    let userType = "CHILD";
    let school = this.validations_form.get('school').value;
    const childDTO = <ChildDTO> {
      "email":null,
      "fullname":fullname,
      "password":null,school,
      "schoolClass":schoolClass,
      "userType":userType,
      "username":null
    }
    const params = {
      "childDTO":childDTO
    }

    this.parentController.createChildUsingPOST(params).toPromise().then((response)=>{
      console.log(response);
      this.alertService.presentToastSuccess("Kind erfolgreich erzeugt");
      this.router.navigateByUrl('parent/kind-uebersicht');
    }).catch((error)=>{
      console.log(error);
      this.alertService.presentToastFailure("Fehler beim Erzeugen");
    });
/*
    console.log("POST");
    // tslint:disable-next-line: max-line-length
    this.http.post(`${environment.apiUrl}/api/parent/child`, postDataBackend,
        {
        headers: {
          'content-type': 'application/JSON',
        }
      },
    ).subscribe({
      // tslint:disable-next-line: max-line-length
      next: () => {this.alertService.presentToast(this.validations_form.get('name').value + ' ' + this.validations_form.get('lname').value +' wurde erfolgreich angelegt.');
                    this.router.navigateByUrl('parent/kind-uebersicht')},
      error: error => {
            console.log(error);
            this.alertService.presentToast('Es gab einen Fehler bei der Erstellung');
            this.router.navigateByUrl('parent/kind-uebersicht');
          },
    });
*/
  }

  abort() {
    this.router.navigateByUrl('parent/kind-uebersicht');
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


  navToKindUebersicht() { this.router.navigateByUrl('/kind-uebersicht') }

}

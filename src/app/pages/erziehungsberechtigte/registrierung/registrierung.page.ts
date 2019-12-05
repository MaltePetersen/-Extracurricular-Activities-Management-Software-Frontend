import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService} from 'src/app/services/alert.service';
import { UsernameValidator} from 'src/app/pages/erziehungsberechtigte/registrierung/username.validator';
import { PasswordValidator } from 'src/app/pages/erziehungsberechtigte/registrierung/password.validator';
import { PhoneValidator } from 'src/app/pages/erziehungsberechtigte/registrierung/phone.validator';
import {CountryPhone} from 'src/app/models/country-phone.model';



@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.page.html',
  styleUrls: ['./registrierung.page.scss'],
})

export class RegistrierungPage implements OnInit {
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;
  countries: Array<CountryPhone>;
  responseData: any;
  userData = {'username': '','password': '', 'name': '','email': ''};

  constructor(public formBuilder: FormBuilder, private router: Router, private auth: AuthenticationService, private alertService: AlertService) { }

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
      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      matching_passwords: this.matching_passwords_group,
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      country_phone: this.country_phone_group,
      rolle: new FormControl ('', Validators.required),
      nameChild: new FormControl('', Validators.required),
      lastnameChild: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$')
      ])),
    });
  }



  validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please wnter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validCountryPhone', message: 'The phone is incorrect for the selected country.' }
    ],
    'rolle': [
      { type: 'required', message: 'Rolle is required.' },
    ],
    'nameChild': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastnameChild': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'birthday': [
      { type: 'required', message: 'Geburtstag is required.' },
      { type: 'pattern', message: 'Das Datum muss im Format TT.MM.JJJJ angegeben werden.' }
    ],
  };

  onSubmit(values){
    console.log(values);
  }

  // register(form: NgForm) {
  //   this.auth.register(form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(
  //     data => {
  //       this.alertService.presentToast(data);
  //       this.router.navigateByUrl('/login');
  //     },
  //     error => {
  //       console.log(error);
  //       this.router.navigateByUrl('/login');
  //     },
  //     () => {

  //     }
  //   );
  // }

  login() {

    this.router.navigateByUrl('/login');
  }




}

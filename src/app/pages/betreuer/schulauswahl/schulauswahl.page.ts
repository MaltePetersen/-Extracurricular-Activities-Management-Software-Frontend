import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-schulauswahl',
  templateUrl: './schulauswahl.page.html',
  styleUrls: ['./schulauswahl.page.scss'],
})
export class SchulauswahlPage implements OnInit {

  schools: any;

  constructor(private auth: AuthenticationService, public router : Router ,public http: HttpClient) {
    this.getSchools();
  }

  ngOnInit() {
  }

  schoolClick(schoolId:number) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: schoolId
      }
    };
    this.router.navigate(['meine-schichten'], navigationExtras);
  }

  getSchools() {
    this.http.get<school[]>(`${environment.apiUrl}/api/employee/schools`).subscribe((a) => {
      this.schools = a;
    });
  }

  logout() {
    this.auth.logout();
  }

}

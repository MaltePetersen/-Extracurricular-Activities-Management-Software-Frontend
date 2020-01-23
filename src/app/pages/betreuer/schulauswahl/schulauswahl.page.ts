import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EmployeeControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-schulauswahl',
  templateUrl: './schulauswahl.page.html',
  styleUrls: ['./schulauswahl.page.scss'],
})
export class SchulauswahlPage implements OnInit {

  schools: any;

  constructor(private auth: AuthenticationService, public router : Router ,public http: HttpClient, private employeeController:EmployeeControllerService) {
  }

  ngOnInit() {
    this.getSchools();
  }

  schoolClick(schoolId:number) {
    let navigationExtras: NavigationExtras = {
      state: {
        id: schoolId
      }
    };
    this.router.navigate(['employee/meine-schichten'], navigationExtras);
  }

  getSchools() {
    this.employeeController.getSchoolsUsingGET().subscribe((schools)=> this.schools = schools);
  }

  logout() {
    this.auth.logout();
  }

}

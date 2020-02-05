import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {  HttpClient } from '@angular/common/http';
import { EmployeeControllerService } from 'src/app/api/services';
import { EmployeeProviderService } from 'src/app/services/employee-provider.service';

@Component({
  selector: 'app-schulauswahl',
  templateUrl: './schulauswahl.page.html',
  styleUrls: ['./schulauswahl.page.scss'],
})
export class SchulauswahlPage implements OnInit {

  schools: any;

  constructor(public router : Router ,public http: HttpClient, private employeeController:EmployeeControllerService, private employeeProvider:EmployeeProviderService) {
  }

  ngOnInit() {
    this.getSchools();
  }

  schoolClick(schoolId:number) {
    this.employeeProvider.setSchoolId(schoolId);
    this.router.navigate(['employee/meine-schichten']);
  }

  getSchools() {
    this.employeeController.getSchoolsUsingGET().subscribe((schools)=> this.schools = schools);
  }
}

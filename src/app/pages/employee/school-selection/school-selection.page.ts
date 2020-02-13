import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {  HttpClient } from '@angular/common/http';
import { EmployeeControllerService } from 'src/app/api/services';
import { EmployeeProviderService } from 'src/app/services/employee-provider.service';

@Component({
  selector: 'app-school-selection',
  templateUrl: './school-selection.page.html',
  styleUrls: ['./school-selection.page.scss'],
})
export class SchoolSelectionPage implements OnInit {

  schools: any;

  constructor(public router : Router ,public http: HttpClient, private employeeController:EmployeeControllerService, private employeeProvider:EmployeeProviderService) {
  }

  ngOnInit() {
    this.getSchools();
  }

  schoolClick(schoolId:number) {
    this.employeeProvider.setSchoolId(schoolId);
    this.router.navigate(['employee/my-cares']);
  }

  getSchools() {
    this.employeeController.getSchoolsUsingGET().subscribe((schools)=> this.schools = schools);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { EmployeeControllerService } from 'src/app/api/services';
import {  AfterSchoolCareDTO } from 'src/app/api/models';
import { MeineSchichtModel } from 'src/app/models/meine-schicht-model';

@Component({
  selector: 'app-meine-schichten',
  templateUrl: './meine-schichten.page.html',
  styleUrls: ['./meine-schichten.page.scss'],
})
export class MeineSchichtenPage implements OnInit {

  schichten:MeineSchichtModel[] = [];
  private datum:any;
  schoolId:number;

  constructor( public router : Router, private employeeController:EmployeeControllerService) { 
  }

  ngOnInit() {
    this.schoolId = this.router.getCurrentNavigation().extras.state.id;
    console.log(this.schoolId);
    this.getAfterSchoolCares().then(response => {
      response.forEach((value)=>{
        this.schichten.push(this.mapToModel(value));
      });
    });
  }

  getAfterSchoolCares() : Promise<AfterSchoolCareDTO[]>{
    return this.employeeController.getAfterSchoolCaresUsingGET().toPromise();
  }

  mapToModel(care:AfterSchoolCareDTO) : MeineSchichtModel{
    let model = new MeineSchichtModel(care.id, care.name, care.startTime, care.startTime, care.startTime);
    console.log(model);
    return model;
  }

  openList(listId:String){
    let navigationExtras: NavigationExtras = {
      state: {
        id: listId
      }
    };
    this.router.navigate(['employee/schueler-anmelden'], navigationExtras);
  }
}
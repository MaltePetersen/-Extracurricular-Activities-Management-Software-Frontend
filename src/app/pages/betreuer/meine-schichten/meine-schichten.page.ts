import { Component, OnInit } from '@angular/core';
import { SchichtModel } from 'src/app/models/schicht-model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, NavigationExtras } from '@angular/router';
import { EmployeeControllerService } from 'src/app/api/services';
import { AfterSchoolCare, AfterSchoolCareDTO, SchoolDTO } from 'src/app/api/models';
import { NgModel } from '@angular/forms';
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

  constructor(private auth: AuthenticationService, public router : Router, private employeeController:EmployeeControllerService) { 
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
    this.router.navigate(['schueler-anmelden'], navigationExtras);
  }
}
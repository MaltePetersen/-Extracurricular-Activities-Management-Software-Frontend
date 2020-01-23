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
    let model = new MeineSchichtModel(care.id, care.name, care.startTime, this.getDayFromDate(care.startTime));
    return model;
  }

  openList(listId:string){
    let navigationExtras: NavigationExtras = {
      state: {
        id: listId
      }
    };
    this.router.navigate(['employee/schueler-anmelden'], navigationExtras);
  }

  getDayFromDate(input:string) : String{
    let days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    let date = new Date(input);
    return days[date.getDay()];
  }
}
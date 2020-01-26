import { Component, OnInit } from '@angular/core';
import { SchichtModel } from 'src/app/models/schicht-model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, NavigationExtras } from '@angular/router';
import { EmployeeControllerService } from 'src/app/api/services';
import { AfterSchoolCare, AfterSchoolCareDTO, SchoolDTO } from 'src/app/api/models';
import { NgModel } from '@angular/forms';
import { MeineSchichtModel } from 'src/app/models/meine-schicht-model';
import Moment from "moment"; 
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment as any);


@Component({
  selector: 'app-meine-schichten',
  templateUrl: './meine-schichten.page.html',
  styleUrls: ['./meine-schichten.page.scss'],
})
export class MeineSchichtenPage implements OnInit {

  schichten:MeineSchichtModel[] = [];
  datum:any = moment().locale('de').format('DD.MM.YYYY');
  schoolId:number;
  datePickerDefaultSettings:any = {
    setLabel: 'Auswählen',
    todayLabel: 'Heute',
    closeLabel: 'Abbrechen',
    titleLabel: 'Wähle ein Datum',
    monthsList: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dez"],
    weeksList: ["S", "M", "D", "M", "D", "F", "S"],
    dateFormat: 'DD.MM.YYYY',
    clearButton : false,
    momentLocale: 'de'
  };

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
    let params = {
      school:this.schoolId
    }
    return this.employeeController.getAfterSchoolCaresUsingGET(params).toPromise();
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

  getDateRange(date:any):string[]{
    let start = moment(date).startOf('isoWeek');
    let end = moment(date).endOf('isoWeek');
    let range = moment.range(start, end);
    return Array.from(range.by('days')).map(m => m.format('DD.MM.YYYY'));
  }

  dateChange(){
    let selectedDate = moment(this.datum,('DD.MM.YYYY'));
    let start = moment(selectedDate).startOf('isoWeek');
    let end = moment(selectedDate).endOf('isoWeek');
    let range = moment.range(start, end);
    let dateArray = Array.from(range.by('days')).map(m => m.format('DD.MM.YYYY'));
    console.table(dateArray);
  }
}
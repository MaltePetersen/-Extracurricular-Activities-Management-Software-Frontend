import { Component, OnInit } from '@angular/core';
import { SchichtModel } from 'src/app/models/schicht-model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, NavigationExtras } from '@angular/router';
import { EmployeeControllerService } from 'src/app/api/services';
import { AfterSchoolCare, AfterSchoolCareDTO, SchoolDTO } from 'src/app/api/models';
import { NgModel } from '@angular/forms';
import { MeineSchichtModel } from 'src/app/models/meine-schicht-model';
import moment from "moment"; 


@Component({
  selector: 'app-meine-schichten',
  templateUrl: './meine-schichten.page.html',
  styleUrls: ['./meine-schichten.page.scss'],
})
export class MeineSchichtenPage implements OnInit {

  schichten:MeineSchichtModel[] = [];
  schoolId:number;
  startDate:any;
  endDate:any;
  datum:any = moment().format('DD.MM.YYYY');
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
    moment.locale('de');
    this.dateChange();
    this.getAfterSchoolCares();
  }

  getAfterSchoolCares(){
    this.schichten = [];
    let params = {
      school:this.schoolId,
      startDate:this.startDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      endDate:this.endDate.format('YYYY-MM-DD[T]HH:mm:ss')
    }
    this.employeeController.getAfterSchoolCaresUsingGET(params).toPromise().then(response => {
      response.forEach((value)=>{
        this.schichten.push(this.mapToModel(value));
      });
    });
  }

  mapToModel(care:AfterSchoolCareDTO) : MeineSchichtModel{
    let model = new MeineSchichtModel(care.id, care.name, care.startTime, this.getDayOfWeek(care.startTime));
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

  getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][dayOfWeek];
  }

  dateChange(){
    let selectedDate = moment(this.datum,('DD.MM.YYYY'));
    this.startDate = moment(selectedDate).startOf('isoWeek');
    this.endDate = moment(selectedDate).endOf('isoWeek');
    this.getAfterSchoolCares();
  }
}
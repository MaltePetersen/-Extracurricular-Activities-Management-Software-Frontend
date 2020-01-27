import { Component, OnInit } from '@angular/core';
import { SchichtModel } from 'src/app/models/schicht-model';
import Moment from "moment"; 
import { extendMoment } from "moment-range";
import { EmployeeControllerService } from 'src/app/api/services';
import { AfterSchoolCareDTO } from 'src/app/api/models';
import { MeineSchichtModel } from 'src/app/models/meine-schicht-model';

const moment = extendMoment(Moment as any);

@Component({
  selector: 'app-abrechnung',
  templateUrl: './abrechnung.page.html',
  styleUrls: ['./abrechnung.page.scss'],
})
export class AbrechnungPage implements OnInit {

  schichten:any;
  startDate:any;
  endDate:any;
  datum:any = moment().locale('de').format('DD.MM.YYYY');
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
  
  constructor(private employeeController:EmployeeControllerService) {
  }

  ngOnInit() {
    this.dateChange();
  }

  getAfterschoolCare(){
    this.schichten = [];
    let params = {
      startDate:this.startDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      endDate:this.endDate.format('YYYY-MM-DD[T]HH:mm:ss')
    };
    this.employeeController.getAfterSchoolCaresUsingGET(params).toPromise().then((response)=>{
      response.forEach((care)=>{
        this.employeeController.getSchoolUsingGET(care.participatingSchool).toPromise().then((school)=>{
          this.schichten.push(this.mapToModel(care, school.name));
        });
      });
    });
  }

  getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][dayOfWeek];
  }

  mapToModel(care:AfterSchoolCareDTO, schoolName:string):SchichtModel{
    return new SchichtModel(care.id, schoolName, care.startTime, care.startTime, this.getDayOfWeek(care.startTime));
  }

  dateChange(){
    let selectedDate = moment(this.datum,('DD.MM.YYYY'));
    this.startDate = moment(selectedDate).startOf('month');
    this.endDate = moment(selectedDate).endOf('month');
    this.getAfterschoolCare();
  }

}

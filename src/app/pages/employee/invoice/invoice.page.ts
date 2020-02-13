import { Component, OnInit } from '@angular/core';
import { AfterSchoolCaresModel } from 'src/app/models/afterSchoolCaresModel';
import Moment from "moment"; 
import { extendMoment } from "moment-range";
import { EmployeeControllerService } from 'src/app/api/services';
import { AfterSchoolCareDTO } from 'src/app/api/models';

const moment = extendMoment(Moment as any);

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  afterSchoolCares:any;
  startDate:any;
  endDate:any;
  calendarDate:any = moment().locale('de').format('DD.MM.YYYY [Monat:] MMMM');
  datePickerDefaultSettings:any = {
    setLabel: 'Auswählen',
    todayLabel: 'Heute',
    closeLabel: 'Abbrechen',
    titleLabel: 'Wähle ein Datum',
    monthsList: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dez"],
    weeksList: ["S", "M", "D", "M", "D", "F", "S"],
    dateFormat: 'DD.MM.YYYY [Monat:] MMMM',
    clearButton : false,
    momentLocale: 'de'
  };
  
  constructor(private employeeController:EmployeeControllerService) {
  }

  ngOnInit() {
    this.dateChange();
  }

  getAfterschoolCare(){
    this.afterSchoolCares = [];
    let params = {
      startDate:this.startDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      endDate:this.endDate.format('YYYY-MM-DD[T]HH:mm:ss')
    };
    this.employeeController.getAfterSchoolCaresUsingGET(params).toPromise().then((response)=>{
      response.forEach((care)=>{
        this.employeeController.getSchoolUsingGET(care.participatingSchool).toPromise().then((school)=>{
          this.afterSchoolCares.push(this.mapToModel(care, school.name));
        });
      });
    });
  }

  getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][dayOfWeek];
  }

  mapToModel(care:AfterSchoolCareDTO, schoolName:string):AfterSchoolCaresModel{
    return new AfterSchoolCaresModel(care.id, schoolName, care.startTime, care.startTime, this.getDayOfWeek(care.startTime));
  }

  dateChange(){
    let selectedDate = moment(this.calendarDate,('DD.MM.YYYY'));
    this.startDate = moment(selectedDate).startOf('month');
    this.endDate = moment(selectedDate).endOf('month');
    this.getAfterschoolCare();
  }

}

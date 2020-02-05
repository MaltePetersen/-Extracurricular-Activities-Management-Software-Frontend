import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { EmployeeControllerService } from 'src/app/api/services';
import {  AfterSchoolCareDTO } from 'src/app/api/models';
import { MyCareModel } from 'src/app/models/myCareModel';
import moment from "moment"; 
import { EmployeeProviderService } from 'src/app/services/employee-provider.service';


@Component({
  selector: 'app-meine-schichten',
  templateUrl: './meine-schichten.page.html',
  styleUrls: ['./meine-schichten.page.scss'],
})
export class MeineSchichtenPage implements OnInit {

  afterSchoolCares:MyCareModel[] = [];
  schoolId:number;
  startDate:any;
  endDate:any;
  calendarDate:any = moment().format('DD.MM.YYYY [Kalenderwoche:] WW');
  datePickerDefaultSettings:any = {
    setLabel: 'Auswählen',
    todayLabel: 'Heute',
    closeLabel: 'Abbrechen',
    titleLabel: 'Wähle ein Datum',
    monthsList: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dez"],
    weeksList: ["S", "M", "D", "M", "D", "F", "S"],
    dateFormat: 'DD.MM.YYYY [Kalenderwoche:] WW',
    clearButton : false,
    momentLocale: 'de'
  };

  constructor( public router : Router, private employeeController:EmployeeControllerService, private employeeProvider:EmployeeProviderService) { 
  }

  ngOnInit() {
    this.employeeProvider.getSchoolId().then((schoolId)=>{
      this.schoolId = schoolId
      moment.locale('de');
      this.dateChange();
      this.getAfterSchoolCares();
    });
  }

  getAfterSchoolCares(){
    this.afterSchoolCares = [];
    let params = {
      school:this.schoolId,
      startDate:this.startDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      endDate:this.endDate.format('YYYY-MM-DD[T]HH:mm:ss')
    }
    this.employeeController.getAfterSchoolCaresUsingGET(params).toPromise().then(response => {
      response.forEach((value)=>{
        this.afterSchoolCares.push(this.mapToModel(value));
      });
    });
  }

  mapToModel(care:AfterSchoolCareDTO) : MyCareModel{
    let model = new MyCareModel(care.id, care.name, care.startTime, this.getDayOfWeek(care.startTime));
    return model;
  }

  openList(careId:number){
    this.employeeProvider.setCareId(careId);
    this.router.navigate(['employee/schueler-anmelden']);
  }

  getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][dayOfWeek];
  }

  dateChange(){
    let selectedDate = moment(this.calendarDate,('DD.MM.YYYY'));
    this.startDate = moment(selectedDate).startOf('isoWeek');
    this.endDate = moment(selectedDate).endOf('isoWeek');
    this.getAfterSchoolCares();
  }
}
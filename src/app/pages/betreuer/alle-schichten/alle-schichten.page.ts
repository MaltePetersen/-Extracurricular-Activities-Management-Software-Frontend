import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { alleSchichtenmodel } from 'src/app/models/alle-Schichten-model';
import { AlleSchichtModel } from 'src/app/models/alle-schicht-model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeControllerService } from 'src/app/api/services';
import { AfterSchoolCareDTO, SchoolDTO, AfterSchoolCare } from 'src/app/api/models';
import Moment from "moment"; 
import { extendMoment } from "moment-range";
import { DayModel } from 'src/app/models/day-model';

const moment = extendMoment(Moment as any);

@Component({
  selector: 'app-alle-schichten',
  templateUrl: './alle-schichten.page.html',
  styleUrls: ['./alle-schichten.page.scss'],
})
export class AlleSchichtenPage implements OnInit {

  schoolId:number;
  startDate:any;
  endDate:any
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
  days: any = [];
  schichten:AlleSchichtModel[] = [];
  selectedDate:Date;
  hideDate:boolean = false;
  hideDateButton:string = "Datum auswählen";


  constructor(private alertController: AlertController, private employeeController:EmployeeControllerService) {
  }

  ngOnInit() {
    this.dateChange();
  }

  mapToModel(care:AfterSchoolCareDTO, schoolName:string):AlleSchichtModel{
    return new AlleSchichtModel(care.id, schoolName, care.startTime, care.startTime, this.getDayOfWeek(care.startTime), care.owner);
  }

  getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][dayOfWeek];
  }

  getAfterSchoolCares(){
    this.days = [
    ];
    let params = {
      school:this.schoolId,
      startDate:this.startDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      endDate:this.endDate.format('YYYY-MM-DD[T]HH:mm:ss')
    }
    this.employeeController.getAfterSchoolCaresUsingGET(params).toPromise().then(response => {
      response.forEach((care)=>{
        this.employeeController.getSchoolUsingGET(care.participatingSchool).toPromise().then((school)=>{
          this.checkEintrag(care, school.name);
        });
      });
    });
  }

  checkEintrag(care:AfterSchoolCareDTO, schoolName:string){
    let weekDay = this.getDayOfWeek(care.startTime);
    let found:boolean = false;
    let foundDay;
    this.days.forEach((day)=>{
      if(day.name == weekDay){
        found = true;
        foundDay = day;
      }
    });
    if(found){
      foundDay.schichten.push(this.mapToModel(care, schoolName));
    } else {
      this.days.push(new DayModel(weekDay, [this.mapToModel(care, schoolName)]));
    }
  }

  getSchool(id:number):Promise<SchoolDTO>{
    return this.employeeController.getSchoolUsingGET(id).toPromise();
  }

  toggleSelection(i){
    this.days[i].open = !this.days[i].open;
  }

  toggleItem(i, j){
    this.days[i].children[j].open = !this.days[i].children.open[j];
  }

  async presentAlert(model:AlleSchichtModel){
    const alert = await this.alertController.create({
      header: model.schule,
      message: model.day + ", den " + moment(model.datum).format('DD.MM.YYYY') + "<br>" + model.owner.fullname,
      buttons: ['OK']
    });
    await alert.present();
  }

  dateSelected($event){
    this.selectedDate = new Date($event);
    console.log(this.selectedDate);
  }

  toggleDate(){
    this.hideDate = !this.hideDate;
    if(this.hideDate){
      this.hideDateButton = "Auswahl minimieren"
    }else {
      this.hideDateButton = "Datum auswählen"
    }
  }

  dateChange(){
    let selectedDate = moment(this.datum,('DD.MM.YYYY'));
    this.startDate = moment(selectedDate).startOf('isoWeek');
    this.endDate = moment(selectedDate).endOf('isoWeek');
    this.getAfterSchoolCares();
  }

}

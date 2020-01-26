import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { alleSchichtenmodel } from 'src/app/models/alle-Schichten-model';
import { AlleSchichtModel } from 'src/app/models/alle-schicht-model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';
import { EmployeeControllerService } from 'src/app/api/services';
import { AfterSchoolCareDTO, SchoolDTO, AfterSchoolCare } from 'src/app/api/models';
import Moment from "moment"; 
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment as any);

@Component({
  selector: 'app-alle-schichten',
  templateUrl: './alle-schichten.page.html',
  styleUrls: ['./alle-schichten.page.scss'],
})
export class AlleSchichtenPage implements OnInit {

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
  days: any = [];
  schichten:AlleSchichtModel[] = [];
  selectedDate:Date;
  hideDate:boolean = false;
  hideDateButton:string = "Datum auswählen";


  constructor(private alertController: AlertController, private employeeController:EmployeeControllerService) {
  }

  ngOnInit() {
    this.getAfterSchoolCares().then((response)=>{
      response.forEach((care)=>{
        this.getSchool(care.participatingSchool).then((school)=>{
          if(!this.days.includes(this.getDayOfWeek(care.startTime))){
            this.days.push(new alleSchichtenmodel(this.getDayOfWeek(care.startTime), []));
          }
          this.days.find(element => element.name == this.getDayOfWeek(care.startTime)).schichten.push(this.mapToModel(care, school.name));
        }).catch((error)=>{
          console.log("Keine Schule gefunden");
          this.days[this.getDayOfWeek(care.startTime)].schichten.push(this.mapToModel(care, "No School"));
        });
      });
    }).catch((error)=>{
      console.log("Keine Veranstaltungen gefunden");
    });
  }

  mapToModel(care:AfterSchoolCareDTO, schoolName:string):AlleSchichtModel{
    return new AlleSchichtModel(care.id, schoolName, care.startTime, care.startTime, this.getDayOfWeek(care.startTime), care.owner);
  }

  getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][dayOfWeek];
  }

  getAfterSchoolCares():Promise<AfterSchoolCareDTO[]>{
    const params = {
    };
    return this.employeeController.getAfterSchoolCaresUsingGET(params).toPromise();
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
    let start = moment(selectedDate).startOf('isoWeek');
    let end = moment(selectedDate).endOf('isoWeek');
    let range = moment.range(start, end);
    let dateArray = Array.from(range.by('days')).map(m => m.format('DD.MM.YYYY'));
    console.table(dateArray);
  }

}

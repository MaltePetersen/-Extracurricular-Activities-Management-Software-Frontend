import { Component, OnInit } from '@angular/core';
import { GebuchteVeranstaltungen } from 'src/app/models/gebuchteVeranstalungen';
import { NavController, AlertController, PopoverController} from '@ionic/angular';
import { AlleSchichtModel } from 'src/app/models/alle-schicht-model';
import {  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GebuchterZeitraum } from 'src/app/models/gebuchterZeitraum';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { VeranstaltungsPopoverPage } from 'src/app/pages/erziehungsberechtigte/veranstaltung-buchen-zeitraum/veranstaltungs-popover/veranstaltungs-popover.page';
import { environment } from 'src/environments/environment';
import moment from 'moment';
import { ParentControllerService } from 'src/app/api/services';
import { AfterSchoolCareDTO, SchoolDTO } from 'src/app/api/models';
import { DayModel } from 'src/app/models/day-model';
import { VeranstaltungBuchenModel } from 'src/app/models/veranstaltungen-buchen-model';

@Component({
  selector: 'app-veranstaltung-buchen-zeitraum',
  templateUrl: './veranstaltung-buchen-zeitraum.page.html',
  styleUrls: ['./veranstaltung-buchen-zeitraum.page.scss'],
})
export class VeranstaltungBuchenZeitraumPage implements OnInit {

  after_school_care_id: number;
  schoolId:number;
  startDate:any;
  endDate:any
  datum:any = moment().locale('de').format('DD.MM.YYYY [Kalenderwoche:] WW');
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
  days: any = [];
  schichten:VeranstaltungBuchenModel[] = [];
  selectedDate:Date;
  hideDate:boolean = false;
  hideDateButton:string = "Datum auswählen";


  constructor(private alertController: AlertController, private parentController:ParentControllerService, private veranstaltungsId:VeranstaltungensdatenService) {
  }

  ngOnInit() {
    this.dateChange();
  }

  mapToModel(care:AfterSchoolCareDTO,):VeranstaltungBuchenModel{
    return new VeranstaltungBuchenModel(care.id, care.name, care.startTime, care.startTime, this.getDayOfWeek(care.startTime), care.owner);
  }

  getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][dayOfWeek];
  }

  getAfterSchoolCares(){
    this.veranstaltungsId.ausgewählteVeranstaltungId.subscribe(veranstaltung => this.after_school_care_id = veranstaltung);
    this.days = [
    ];
    let params = {
      school:this.schoolId,
      startDate:this.startDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      endDate:this.endDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      type:this.after_school_care_id,
    }
    this.parentController.getAfterSchoolCaresUsingGET1(params).toPromise().then(response => {
      response.forEach((care)=>{
        // this.parentController.getSchoolUsingGET(care.participatingSchool).toPromise().then((school)=>{
        //   this.checkEintrag(care, school.name);
        // });
        this.checkEintrag(care);
      });
    });
  }

  checkEintrag(care:AfterSchoolCareDTO){
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
      foundDay.schichten.push(this.mapToModel(care));
    } else {

      console.log("Bis hierher und nicht weiter.... Zeile 97 im Quellcode.")
      // this.days.push(new DayModel(weekDay, [this.mapToModel(care)]));
    }
  }

  // getSchool(id:number):Promise<SchoolDTO>{
  //   return this.parentController.getSchoolUsingGET(id).toPromise();
  // }

  toggleSelection(i){
    this.days[i].open = !this.days[i].open;
  }

  toggleItem(i, j){
    this.days[i].children[j].open = !this.days[i].children.open[j];
  }

  async presentAlert(model:VeranstaltungBuchenModel){
    const alert = await this.alertController.create({
      header: model.name,
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



//   veranstaltungId: number;
//   veranstaltungen = [];
//   kindername: any;
//   kinderId:any
//   zeit: any;
//   days: any;
//   datum: any;
//   weekNo: any;
//   endzeit = "16:00";
//   bemerkung: any;

//   constructor(private nav: NavController, private popoverController: PopoverController, private alertController: AlertController, public router : Router ,public http: HttpClient, private veranstaltungsDaten: VeranstaltungensdatenService) {
//     this.getVeranstaltungen();
//     this.days = [
//       new GebuchteVeranstaltungen("Montag", this.zeit),
//       new GebuchteVeranstaltungen("Dienstag", this.zeit),
//       new GebuchteVeranstaltungen("Mittwoch", this.zeit),
//       new GebuchteVeranstaltungen("Donnestag", this.zeit),
//       new GebuchteVeranstaltungen("Freitag", this.zeit)
//     ];
//    }
 
//   //  getVeranstaltungen() {
//   //   this.zeit = [
//   //     new GebuchterZeitraum("13:00 - 15:00 Uhr", "Deutsch"),
//   //   ];
//   // }

//   getVeranstaltungen() {
//     this.veranstaltungsDaten.ausgewählteVeranstaltungId.subscribe(veranstaltung => this.veranstaltungId = veranstaltung);
//     console.log("ID vorhanden? "+this.veranstaltungId)
//     this.http.get(`${environment.apiUrl}/api/parent/after_school_cares/${this.veranstaltungId}`).subscribe((a) => {
//       this.veranstaltungen = [a];
//       console.log (a)
//   //   this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
//   //   this.zeit = [
//   //     new GebuchterZeitraum("Montag","13:00 - 15:00 Uhr", this.veranstaltung),
//   //  ];
//   //   this.veranstaltungsDaten.ausgewähltesKind.subscribe(kindername => this.kindername = kindername);
//   //   this.veranstaltungsDaten.ausgewählteID.subscribe(kinderId => this.kinderId = kinderId);
//     });
//   }

//   toggleSelection(i){
//     this.days[i].open = !this.days[i].open;
//   }

//   toggleItem(i, j){
//     this.days[i].children[j].open = !this.days[i].children.open[j];
//   }

//   async presentAlert(name, zeit){
//     const alert = await this.alertController.create({
//       header: "Erfolgreich",
//       message: "Du hast für "+this.kindername+" die Veranstaltung "+name+" am "+zeit+" gebucht.",
//       buttons: ['OK']
//     });
//     await alert.present();
//   }

//   selectCalendarWeek(){
    
//     let d: any;
//     d = new Date(this.datum);
//     let yearStart: any;

//       // Copy date so don't modify original
//     d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
//       // Set to nearest Thursday: current date + 4 - current day number
//       // Make Sunday's day number 7
//     d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
//       // Get first day of year
//     yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
//       // Calculate full weeks to nearest Thursday
//     this.weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
//       // Return array of year and week number
//     console.log([d.getUTCFullYear(), this.weekNo]);
//      //return [d.getUTCFullYear(), weekNo];
  

//   }

//   async presentPopover(ev: any, name, zeit) {
//         console.log("name : "+name)
//         console.log("zeit : "+zeit)

//         const popover = await this.popoverController.create({
//       component: VeranstaltungsPopoverPage,
//       event: ev,
//       translucent: true,
//       componentProps: {
//         endzeit: this.endzeit,
//         veranstaltung: this.veranstaltungen,
//       }
//     });
    
//         await popover.present()

//         popover.onDidDismiss().then((dataReturned) => {
//       if (dataReturned !== null) {
//         // console.log("KAKAKAKAKAKAKKA")
//          console.log(dataReturned.data)
//          console.log(dataReturned.role)
//          this.endzeit = dataReturned.data;
//          this.bemerkung = dataReturned.role;
//          this.presentAlert(name, zeit);
//       }
//     });
//     // return await modal.present();
//   }




//  ngOnInit() {
//   this.datum = new Date().toDateString();
//   this.selectCalendarWeek();
//   //   this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
//   //   console.log("Veranstaltung von zeitraum = "+ this.veranstaltung);
//   //   console.log("Zeit 1 = "+ this.zeit);
//   //   this.zeit = [
//   //     new GebuchterZeitraum("13:00 - 15:00 Uhr", this.veranstaltung),
//   //  ];
//   //  console.log("Zeit 2 = "+ JSON.stringify(this.zeit));
//   console.log("this.datum: " +this.datum)
//   }

}

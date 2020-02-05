import { Component, OnInit } from '@angular/core';
import { GebuchteVeranstaltungen } from 'src/app/models/gebuchteVeranstalungen';
import { NavController, AlertController, PopoverController} from '@ionic/angular';
import {  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GebuchterZeitraum } from 'src/app/models/gebuchterZeitraum';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { VeranstaltungsPopoverPage } from 'src/app/pages/erziehungsberechtigte/veranstaltung-buchen-zeitraum/veranstaltungs-popover/veranstaltungs-popover.page';
import { environment } from 'src/environments/environment';
import moment from 'moment';
import { ParentControllerService } from 'src/app/api/services';
import { AfterSchoolCareDTO, SchoolDTO, AttendanceInputDTO, SimpleUserDTO } from 'src/app/api/models';
import { ParentDayModel } from 'src/app/models/parent-day-model';
import { VeranstaltungBuchenModel } from 'src/app/models/veranstaltungen-buchen-model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-veranstaltung-buchen-zeitraum',
  templateUrl: './veranstaltung-buchen-zeitraum.page.html',
  styleUrls: ['./veranstaltung-buchen-zeitraum.page.scss'],
})
export class VeranstaltungBuchenZeitraumPage implements OnInit {
  child: any;
  careId: number;
  endzeit: any;
  bemerkung: any;
  veranstaltungenBuchen: any;
  veranstaltungType: number;
  veranstaltungName:string;
  after_school_care_type: number;
  schoolId:number;
  startDate:any;
  endDate:any
  datum:any = moment().locale('de').format('[Kalenderwoche:] WW');
  datePickerDefaultSettings:any = {
    setLabel: 'Auswählen',
    todayLabel: 'Heute',
    closeLabel: 'Abbrechen',
    titleLabel: 'Wähle ein Datum',
    monthsList: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez'],
    weeksList: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
    dateFormat: 'DD.MM.YYYY [Kalenderwoche:] WW',
    clearButton : false,
    momentLocale: 'de'
  };
  days: any = [];
  schichten:VeranstaltungBuchenModel[] = [];
  selectedDate:Date;
  hideDate:boolean = false;
  hideDateButton:string = 'Datum auswählen';


  constructor(public router : Router, private alertService: AlertService, private popoverController: PopoverController, private alertController: AlertController, private veranstaltungsDaten: VeranstaltungensdatenService, private parentController:ParentControllerService) {
  }

  ngOnInit() {
    this.veranstaltungsDaten.ausgewählteSchulId.subscribe(schoolId => this.schoolId = schoolId);
    this.veranstaltungsDaten.ausgewählteVeranstaltungType.subscribe(veranstaltungType => this.after_school_care_type = veranstaltungType);
    this.veranstaltungsDaten.ausgewählteVeranstaltungsTypID.subscribe(careId => this.careId = careId);
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(name => this.veranstaltungName = name);
    this.veranstaltungsDaten.chosenChild.subscribe(child => this.child = child);
    this.dateChange();
  }

  mapToModel(care:AfterSchoolCareDTO,):VeranstaltungBuchenModel{
    return new VeranstaltungBuchenModel(care.id, care.name, care.startTime, care.endTime, this.getDayOfWeek(care.startTime), care.owner);
  }

  getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][dayOfWeek];
  }

  getAfterSchoolCares(){
    this.schichten = [];
    this.days = [];
    let params = {
      school:this.schoolId,
      startDate:this.startDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      endDate:this.endDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      type:this.after_school_care_type,
    }
    this.parentController.getAfterSchoolCaresUsingGET1(params).toPromise().then(response => {
      console.table(response)
      response.forEach((care)=>{
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
      this.days.push(new ParentDayModel(weekDay, [this.mapToModel(care)]));
    }
  }

  toggleSelection(i){
    this.days[i].open = !this.days[i].open;
  }

  toggleItem(i, j){
    this.days[i].children[j].open = !this.days[i].children.open[j];
  }

  async presentPopover(model:VeranstaltungBuchenModel) {
          const popover = await this.popoverController.create({
          component: VeranstaltungsPopoverPage,
          cssClass: "veranstaltung-buchen-popover",
          translucent: true,
          componentProps: {
            veranstaltung: model
          }
        });
        popover.style.cssText = "--width:'auto'";
        await popover.present()
        popover.onDidDismiss().then((dataReturned) => {
          console.log(dataReturned);
          if (dataReturned.data !== null || dataReturned.role !== null) {
            this.bookCare(dataReturned.data)
          } else {
            this.alertService.presentToastFailure('Die Veranstaltung wurde nicht gebucht.');
            this.router.navigateByUrl('parent/veranstaltung-buchen')
          }
        });
        // return await modal.present();
      }

      bookCare(attendanceData) {
        const attendanceDTO = <AttendanceInputDTO> {
            "allowedToLeaveAfterFinishedHomework": attendanceData.allowedToLeave,
            "childUsername": this.child.username,
            "latestArrivalTime": attendanceData.startzeit,
            "note": attendanceData.bemerkung,
            "predefinedLeaveTime": attendanceData.endzeit
          }
        
        const params = {
          "afterSchoolCareId":this.careId,
          "attendanceInputDTO":attendanceDTO
        }
    
        console.log(params);/*
        this.parentController.addAttendanceUsingPOST(params).toPromise().then((response)=>{
          console.log(response);
          this.alertService.presentToastSuccess('Buchung erfolgreich');
          this.router.navigateByUrl('parent/veranstaltung-buchen')
        }).catch((error)=>{
          console.log(error);
          this.alertService.presentToastFailure("Buchung fehlgeschlagen");
          this.router.navigateByUrl('parent/veranstaltung-buchen')
        });*/
      }

  dateSelected($event){
    this.selectedDate = new Date($event);
    console.log(this.selectedDate);
  }

  toggleDate(){
    this.hideDate = !this.hideDate;
    if(this.hideDate){
      this.hideDateButton = 'Auswahl minimieren'
    }else {
      this.hideDateButton = 'Datum auswählen'
    }
  }

  dateChange(){
    let selectedDate = moment(this.datum,('DD.MM.YYYY'));
    this.startDate = moment(selectedDate).startOf('isoWeek');
    this.endDate = moment(selectedDate).endOf('isoWeek');
    this.getAfterSchoolCares();
  }
}


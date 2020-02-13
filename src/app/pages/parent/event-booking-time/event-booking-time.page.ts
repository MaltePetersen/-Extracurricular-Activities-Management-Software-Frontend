import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, PopoverController} from '@ionic/angular';
import { Router } from '@angular/router';
import { EventdateService } from 'src/app/services/eventdate.service';
import { EventPopoverPage } from 'src/app/pages/parent/event-booking-time/event-popover/event-popover.page';
import moment from 'moment';
import { ParentControllerService } from 'src/app/api/services';
import { AfterSchoolCareDTO, SchoolDTO, AttendanceInputDTO, SimpleUserDTO } from 'src/app/api/models';
import { ParentDayModel } from 'src/app/models/parent-day-model';
import { AlertService } from 'src/app/services/alert.service';
import { ParentProviderService } from 'src/app/services/parent-provider.service';
import { EventPopoverModel } from 'src/app/models/eventPopoverModel';
import { EventBookingModel } from 'src/app/models/event-booking-model';

@Component({
  selector: 'app-event-booking-time',
  templateUrl: './event-booking-time.page.html',
  styleUrls: ['./event-booking-time.page.scss'],
})
export class EventBookingTimePage implements OnInit {
  careId:number;
  careName:string;
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
  shifts:EventBookingModel[] = [];
  selectedChild:SimpleUserDTO;
  typeId:number;


  constructor(public router : Router, private alertService: AlertService, private popoverController: PopoverController, private alertController: AlertController, private eventDates: EventdateService, private parentController:ParentControllerService, private parentProvider:ParentProviderService) {
  }

  ngOnInit(){
    this.parentProvider.getTypeName().then((name)=>{
      this.careName = name
      this.parentProvider.getSelectedChild().then((child)=>{
        this.selectedChild = child
        this.parentProvider.getTypeId().then((typeId)=>{
          this.typeId = typeId
          this.dateChange();
        });
      });
    });
    
  }

  mapToModel(care:AfterSchoolCareDTO,): EventBookingModel{
    return new EventBookingModel(care.id, care.name, care.startTime, care.endTime, this.getDayOfWeek(care.startTime), care.owner);
  }

  getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null : ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][dayOfWeek];
  }

  getAfterSchoolCares(){
    this.shifts = [];
    this.days = [];
    let params = {
      school:this.selectedChild.childSchool,
      startDate:this.startDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      endDate:this.endDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      type:this.typeId,
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
      foundDay.shifts.push(this.mapToModel(care));
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

  async presentPopover(model:EventBookingModel) {
    let popoverModel = new EventPopoverModel(model.id, model.startTime, model.endTime, null, null, null, null, this.selectedChild.username);
    console.log("popoverModel: " + new EventPopoverModel(model.id, model.startTime, model.endTime, null, null, null, null, this.selectedChild.username));
    const popover = await this.popoverController.create({
      component: EventPopoverPage,
      cssClass: "event-booking-popover",
      translucent: true,
      componentProps: {
        model: popoverModel,
        isChange:false
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
        this.router.navigateByUrl('parent/event-booking')
      }
    });
  }

  bookCare(attendanceData) {
    const attendanceDTO = <AttendanceInputDTO> {
      "latestArrivalTime": attendanceData.latestArrivalTime,
      "predefinedLeaveTime": attendanceData.predefinedLeaveTime,
      "allowedToLeaveAfterFinishedHomework": attendanceData.allowedToLeave,
      "note": attendanceData.note,
      "childUsername": attendanceData.username
    }
    
    const params = {
      "afterSchoolCareId":attendanceData.careId,
      "attendanceInputDTO":attendanceDTO
    }

    console.log(params);
    
    this.parentController.addAttendanceUsingPOST(params).toPromise().then((response)=>{
      this.alertService.presentToastSuccess('Buchung erfolgreich');
      this.router.navigateByUrl('parent/event-booking')
    }).catch((error)=>{
      console.log(error);
      this.alertService.presentToastFailure("Buchung fehlgeschlagen");
      this.router.navigateByUrl('parent/event-booking')
    });
  }

  dateChange(){
    if(this.selectedChild && this.typeId){
      let selectedDate = moment(this.datum,('DD.MM.YYYY'));
      this.startDate = moment(selectedDate).startOf('isoWeek');
      this.endDate = moment(selectedDate).endOf('isoWeek');
      this.getAfterSchoolCares();
    }
  }
}


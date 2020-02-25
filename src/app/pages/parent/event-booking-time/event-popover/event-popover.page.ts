import { PopoverController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import moment from 'moment';
import { ParentProviderService } from 'src/app/services/parent-provider.service';
import { EventPopoverModel } from 'src/app/models/eventPopoverModel';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-event-popover',
  templateUrl: './event-popover.page.html',
  styleUrls: ['./event-popover.page.scss'],
})
export class EventPopoverPage implements OnInit {
  picker1:any;
  picker2:any;
  isChange:boolean;
  careId:number;
  latestArrivalTime:string;
  predefinedLeaveTime:string;
  startTime:string;
  endTime:string;
  allowedToLeave:boolean = false;
  note:string;
  username:any;
  date:moment.Moment;
  model:EventPopoverModel;

  constructor(private popoverController: PopoverController, private parentProvider:ParentProviderService, private alertService:AlertService) { }

  ngOnInit() {
    this.mapModelToPopover();
    if(this.isChange){
      if(this.latestArrivalTime){
        this.picker1 = moment(this.latestArrivalTime).format('HH:mm');
      } else{
        this.picker1 = moment(this.startTime).format('HH:mm');
      }
      if(this.predefinedLeaveTime){
        this.picker2 = moment(this.predefinedLeaveTime).format('HH:mm');
      } else {
        this.picker2 = moment(this.endTime).format('HH:mm');
      }
    } else {
      this.picker1 = moment(this.startTime).format('HH:mm');
      this.picker2 = moment(this.endTime).format('HH:mm');
    }
  }

  mapModelToPopover(){
    this.careId = this.model.careId;
    this.latestArrivalTime = this.model.latestArrivalTime;
    this.predefinedLeaveTime = this.model.predefinedLeaveTime;
    this.startTime = this.model.startTime;
    this.endTime = this.model.endTime;
    this.allowedToLeave = this.model.allowedToLeaveAfterFinishedHomework;
    this.note = this.model.note
    this.username = this.model.username;
    this.date = moment(this.model.startTime);
  }

  picker1Changed(date){
    let splitDate = date.split(":");
    let finalDate = this.date;
    finalDate.set({h: +splitDate[0], m: +splitDate[1]})
    this.latestArrivalTime = finalDate.format('YYYY-MM-DD[T]HH:mm:ss');
  }

  picker2Changed(date:string){
    let splitDate = date.split(":");
    let finalDate = this.date;
    finalDate.set({h: +splitDate[0], m: +splitDate[1]})
    this.predefinedLeaveTime = moment(finalDate).format('YYYY-MM-DD[T]HH:mm:ss');
  }

  async saveAttendance(){
    if(this.latestArrivalTime > this.endTime){
      this.alertService.presentToastFailure("Die Ankunftzeit muss vor dem Ende der Veranstaltung liegen!")
    } else if(this.latestArrivalTime < this.startTime){
      this.alertService.presentToastFailure("Die Ankunftszeit muss nach dem Start der Veranstaltung liegen!");
    } else if(this.predefinedLeaveTime < this.startTime){
      this.alertService.presentToastFailure("Die Gehzeit muss nach dem Anfang der Veranstaltung liegen!")
    } else if(this.predefinedLeaveTime > this.endTime){
      this.alertService.presentToastFailure("Die Gehzeit muss vor dem Ende der Veranstaltung liegen!");
    } else if(this.latestArrivalTime > this.predefinedLeaveTime){
      this.alertService.presentToastFailure("Die Ankunftszeit muss vor der Gehzeit liegen!")
    } else {
      if(this.latestArrivalTime == this.startTime){
        this.latestArrivalTime = null;
      }
      if(this.predefinedLeaveTime == this.endTime){
        this.predefinedLeaveTime = null;
      }
      let attendanceData = {
        "careId":this.careId,
        "latestArrivalTime":this.latestArrivalTime,
        "predefinedLeaveTime":this.predefinedLeaveTime,
        "allowedToLeave":this.allowedToLeave,
        "note":this.note,
        "username":this.username
      };
      await this.popoverController.dismiss(attendanceData);
    }
  }

  async abort(){
    await this.popoverController.dismiss();
  }
}

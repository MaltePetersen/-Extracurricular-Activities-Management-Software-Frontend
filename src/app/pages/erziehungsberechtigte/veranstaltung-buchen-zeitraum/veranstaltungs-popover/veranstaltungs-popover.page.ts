import { PopoverController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import moment from 'moment';
import { VeranstaltungBuchenModel } from 'src/app/models/veranstaltungen-buchen-model';
import { ParentProviderService } from 'src/app/services/parent-provider.service';
import { AfterSchoolCareDTO } from 'src/app/api/models';


@Component({
  selector: 'app-veranstaltungs-popover',
  templateUrl: './veranstaltungs-popover.page.html',
  styleUrls: ['./veranstaltungs-popover.page.scss'],
})
export class VeranstaltungsPopoverPage implements OnInit {
  startTime:any;
  endTime:any;
  care:AfterSchoolCareDTO;
  note:string;
  date:any;
  allowedToLeave:boolean = false;

  constructor(private popoverController: PopoverController, private parentProvider:ParentProviderService) { }

  ngOnInit() {
    console.log(this.care);
    this.date = moment(this.care.startTime).toString();
    this.startTime = this.date;
    this.endTime = moment(this.care.endTime).toString();
  }

  startTimeChange(data){
    this.startTime = data;
  }

  endTimeChange(data){
    this.endTime = data;
  }

  async saveAttendance(){
    let attendanceData = {
      "allowedToLeave":this.allowedToLeave,
      "startzeit":moment(this.startTime).format('YYYY-MM-DD[T]HH:mm:ss'),
      "endzeit":moment(this.endTime).format('YYYY-MM-DD[T]HH:mm:ss'),
      "note":this.note,
      "care":this.care
    };
    await this.popoverController.dismiss(attendanceData);
  }

  async abort(){
    await this.popoverController.dismiss(null, null);
  }
}

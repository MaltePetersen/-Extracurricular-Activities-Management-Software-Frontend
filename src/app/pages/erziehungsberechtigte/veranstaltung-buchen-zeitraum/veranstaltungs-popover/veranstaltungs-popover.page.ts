import { PopoverController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import moment from 'moment';
import { VeranstaltungBuchenModel } from 'src/app/models/veranstaltungen-buchen-model';


@Component({
  selector: 'app-veranstaltungs-popover',
  templateUrl: './veranstaltungs-popover.page.html',
  styleUrls: ['./veranstaltungs-popover.page.scss'],
})
export class VeranstaltungsPopoverPage implements OnInit {
  startTime:any;
  endTime:any;
  veranstaltung:VeranstaltungBuchenModel
  bemerkung:string;
  date:any;
  allowedToLeave:boolean = false;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    this.date = moment(this.veranstaltung.startTime).format('YYYY-MM-DDTHH:mmZ');
    this.startTime = this.date;
    this.endTime = moment(this.veranstaltung.endTime).format('YYYY-MM-DDTHH:mmZ');
    console.log(this.date);
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
      "bemerkung":this.bemerkung,
      "care":this.veranstaltung
    };
    await this.popoverController.dismiss(attendanceData);
  }

  async abort(){
    await this.popoverController.dismiss(null, null);
  }
}

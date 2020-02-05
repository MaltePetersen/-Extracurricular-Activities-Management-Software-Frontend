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
  startTime:Date;
  endTime:Date;
  veranstaltung:VeranstaltungBuchenModel
  bemerkung:string;
  datum = null;
  allowedToLeave:boolean = false;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  endTimeChange(data){
    console.log(data);
  }

  async saveAttendance(){
    console.log(this.startTime);

    let attendanceData = {
      "allowedToLeave":this.allowedToLeave,
      "startzeit":this.startTime,
      "endzeit":this.endTime,
      "bemerkung":this.bemerkung,
      "care":this.veranstaltung
    };
    await this.popoverController.dismiss(attendanceData);
  }

  // Hier muss ich die Werte noch Null setzen von Endzeit und Bemerkung!!!
  async abort(){
    await this.popoverController.dismiss(null, null);
}
}

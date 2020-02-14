import { Component, OnInit, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ParentControllerService } from 'src/app/api/services';
import { UserDTO, AfterSchoolCareDTO, AttendanceInputDTO, SimpleUserDTO } from 'src/app/api/models';
import { AlertController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { EventPopoverPage } from '../event-booking-time/event-popover/event-popover.page';
import { EventChangeModel } from 'src/app/models/event-change-model';
import { EventPopoverModel } from 'src/app/models/eventPopoverModel';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.page.html',
  styleUrls: ['./parent-dashboard.page.scss'],
})
export class ParentDashboardPage implements OnInit {
  careId: number;
  afterSchoolCares: EventChangeModel[];
  events: AfterSchoolCareDTO[];
  children: [];
  selectedChild: SimpleUserDTO;

  constructor( private popoverController: PopoverController, private alertService: AlertService, private router: Router, private alertController: AlertController, public http: HttpClient, private parentController: ParentControllerService) {
    this.getChildren();
    this.getEvents();
  }

  ngOnInit() {
  }

  getChildren() {
    this.children = [];

    const params = {
    };

    this.parentController.getChildsUsingGET(params).toPromise().then((children) => {
        if (children.length === 0) {
          this.createChildAlert();
        }
        }).catch((error) => {
          console.log(error);
        });
  }

  async createChildAlert() {
    const alert = await this.alertController.create({
      header: 'Achtung,',
      message: 'Sie haben noch keine Kinder hinzugefügt, wollen Sie dies jetzt tun?',
      buttons: [{text: 'Ja',
                role: 'confirm',
                handler: () => {
                  this.router.navigateByUrl('parent/child-add');
                }
                },
                {text: 'Nein',
                role: 'cancel',
              }]
    });
    await alert.present();
  }


  getEvents() {
    this.afterSchoolCares = [];
    const params = { };
    this.parentController.getBookedAfterSchoolCaresUsingGET(params).toPromise().then((cares) => {
      cares.forEach((response) => {
        response.attendances.forEach((attendance)=>{
          this.afterSchoolCares.push(new EventChangeModel(attendance.id, response.name, response.startTime, response.endTime, attendance.latestArrivalTime, attendance.predefinedLeaveTime, attendance.allowedToLeaveAfterFinishedHomework, attendance.note, attendance.child.fullname, attendance.child.username, attendance.status));
        });
      });
    }).catch((error) => {
      console.log(error);
    });
  }

async deleteAttendance(id) {
  const alert = await this.alertController.create({
    header: 'Warnung,',
    message: 'Wollen Sie ihr Kind wirklich abmelden?',
    buttons: [
      {
        text: 'Ja',
        role: 'confirm',
        handler: () => {
          this.parentController.deleteAttendanceUsingDELETE(id).toPromise().then(() => {
            this.getEvents();
            this.alertService.presentToastSuccess('Ihr Kind wurde abgemeldet');
          }).catch((error) => {
            this.alertService.presentToastFailure('Es ist ein Fehler aufgetreten');
            console.log(error);
          });
        }
      },
      {
        text: 'Nein',
        role: 'cancel',
      }
    ]
    });
    await alert.present();
  }

  async changeAttendance(model: EventChangeModel) {
    let popoverModel = new EventPopoverModel(model.id, model.startTime, model.endTime, model.latestArrivalTime, model.predefinedLeaveTime, model.allowedToLeaveAfterFinishedHomework, model.note, model.username);
    const popover = await this.popoverController.create({
      component: EventPopoverPage,
      cssClass: 'event-booking-popover',
      translucent: true,
      componentProps: {
        model: popoverModel,
        isChange:true
      }
    });
    popover.style.cssText = '--width:\'auto\'';
    await popover.present();
    popover.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data) {
        this.changeCare(dataReturned.data);
      }
    });
  }

  changeCare(changeAttendanceData) {
    const update = {
      'latestArrivalTime': changeAttendanceData.latestArrivalTime,
      'predefinedLeaveTime': changeAttendanceData.predefinedLeaveTime,
      'allowedToLeaveAfterFinishedHomework': changeAttendanceData.allowedToLeave,
      'note': changeAttendanceData.note,
      'childUsername': changeAttendanceData.username
    };
    const params = {
      "update": update,
      "id": changeAttendanceData.careId
    }
    this.parentController.updateAttendanceUsingPATCH1(params).toPromise().then((response) => {
      this.alertService.presentToastSuccess('Änderung erfolgreich');
      this.getEvents();
    }).catch((error) => {
      console.log(error);
      this.alertService.presentToastFailure('Änderung fehlgeschlagen');
    });
  }
}

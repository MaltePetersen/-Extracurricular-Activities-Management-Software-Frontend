import { Component, OnInit, NgModule } from '@angular/core';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ParentControllerService } from 'src/app/api/services';
import { UserDTO, AfterSchoolCareDTO, AttendanceInputDTO, SimpleUserDTO } from 'src/app/api/models';
import { AlertController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { VeranstaltungBuchenModel } from 'src/app/models/veranstaltungen-buchen-model';
import { VeranstaltungsPopoverPage } from '../veranstaltung-buchen-zeitraum/veranstaltungs-popover/veranstaltungs-popover.page';
import { VeranstaltungAendernModel } from 'src/app/models/veranstaltung-aendern-model';
import { VeranstaltungPopoverModel } from 'src/app/models/veranstaltungPopoverModel';

class IUserDTO implements UserDTO {

}

@Component({
  selector: 'app-erziehungsberechtigte-dashboard',
  templateUrl: './erziehungsberechtigte-dashboard.page.html',
  styleUrls: ['./erziehungsberechtigte-dashboard.page.scss'],
})
export class ErziehungsberechtigteDashboardPage implements OnInit {
  careId: number;
  afterSchoolCares: VeranstaltungAendernModel[];
  veranstaltung: string;
  veranstaltungen: AfterSchoolCareDTO[];
  children: [];
  selectedChild: SimpleUserDTO;

  constructor( private popoverController: PopoverController, private alertService: AlertService, private router: Router, private alertController: AlertController, private veranstaltungsDaten: VeranstaltungensdatenService, public http: HttpClient, private parentController: ParentControllerService) {
    this.getChildren();
    this.getVeranstaltungen();
  }

  ngOnInit() {
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
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
                  this.router.navigateByUrl('parent/kind-hinzufuegen');
                }
                },
                {text: 'Nein',
                role: 'cancel',
              }]
    });
    await alert.present();
  }


  getVeranstaltungen() {
    this.afterSchoolCares = [];
    const params = { };
    this.parentController.getBookedAfterSchoolCaresUsingGET(params).toPromise().then((cares) => {
      cares.forEach((response) => {
        response.attendances.forEach((attendance)=>{
          this.afterSchoolCares.push(new VeranstaltungAendernModel(attendance.id, response.name, response.startTime, response.endTime, attendance.latestArrivalTime, attendance.predefinedLeaveTime, attendance.allowedToLeaveAfterFinishedHomework, attendance.note, attendance.child.fullname, attendance.child.username, attendance.status));
        });
      });
      console.log(this.afterSchoolCares);
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
            this.getVeranstaltungen();
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

  async changeAttendance(model: VeranstaltungAendernModel) {
    let popoverModel = new VeranstaltungPopoverModel(model.id, model.startTime, model.endTime, model.latestArrivalTime, model.predefinedLeaveTime, model.allowedToLeaveAfterFinishedHomework, model.note, model.username);
    const popover = await this.popoverController.create({
      component: VeranstaltungsPopoverPage,
      cssClass: 'veranstaltung-buchen-popover',
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
      this.getVeranstaltungen();
    }).catch((error) => {
      console.log(error);
      this.alertService.presentToastFailure('Änderung fehlgeschlagen');
    });
  }

  async chooseOffer(name) {
    this.veranstaltungsDaten.changeVeranstaltung(name.toString());
  }
}

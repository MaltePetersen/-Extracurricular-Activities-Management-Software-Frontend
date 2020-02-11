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

class IUserDTO implements UserDTO {

}

@Component({
  selector: 'app-erziehungsberechtigte-dashboard',
  templateUrl: './erziehungsberechtigte-dashboard.page.html',
  styleUrls: ['./erziehungsberechtigte-dashboard.page.scss'],
})
export class ErziehungsberechtigteDashboardPage implements OnInit {
  careId: number;
  afterSchoolCares: any;
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
                // handler: () => {
                //   this.router.navigateByUrl('login');
                // },
              }]
    });
    await alert.present();
  }


  getVeranstaltungen() {
    this.afterSchoolCares = [];
    const params = { };
    this.parentController.getBookedAfterSchoolCaresUsingGET(params).toPromise().then((cares) => {
      // this.veranstaltungen = cares;
      cares.forEach((response) => {
        console.log('RES: '+ response.attendances[0].note);
        for (let i = 0; i < response.attendances.length; i++) {
        this.afterSchoolCares.push({'id': response.attendances[i].id, 'startTime': response.startTime, 'name': response.name, 'endTime': response.endTime,
         'childName': response.attendances[i].child.fullname, 'latestArrivalTime': response.attendances[i].latestArrivalTime, 'predefinedLeaveTime': response.attendances[i].predefinedLeaveTime,
        'allowedToLeaveAfterFinishedHomework': response.attendances[i].allowedToLeaveAfterFinishedHomework, 'childUsername': response.attendances[i].child.username,
        'note': response.attendances[i].note, });
        console.table(this.afterSchoolCares);
        }
      });
      console.table(this.veranstaltungen);
    }).catch((error) => {
      console.log(error);
    });
  }

  async deleteAttendance(id) {
    const alert = await this.alertController.create({
      header: 'Warnung,',
      message: 'Wollen Sie ihr Kind wirklich abmelden?',
      buttons: [{text: 'Ja',
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
                {text: 'Nein',
                role: 'cancel',
                // handler: () => {
                //   this.router.navigateByUrl('login');
                // },
              }]
    });
    await alert.present();
  }

  async changeAttendance(model: VeranstaltungAendernModel) {
    console.log('MODEL');
    console.log(model);
    this.careId = model.id;
    const popover = await this.popoverController.create({
      component: VeranstaltungsPopoverPage,
      cssClass: 'veranstaltung-buchen-popover',
      translucent: true,
      componentProps: {
        care: model
      }
    });
    popover.style.cssText = '--width:\'auto\'';
    await popover.present();
    popover.onDidDismiss().then((dataReturned) => {
      console.log('DATA RETURNED');
      console.log(dataReturned);
      if (dataReturned.data) {
        this.changeCare(dataReturned.data);
      } else {
        this.alertService.presentToastFailure('Änderung nicht erfolgreich');
      }
    });
    // return await modal.present();
  }

  changeCare(changeAttendanceData) {
    let latestArrivalTime: string;
    let predefinedLeaveTime: string;
    if (changeAttendanceData.startzeit == changeAttendanceData.care.startTime) {
      latestArrivalTime = null;
    } else {
      latestArrivalTime = changeAttendanceData.startzeit;
    }
    if (changeAttendanceData.endzeit == changeAttendanceData.care.endTime) {
      predefinedLeaveTime = null;
    } else {
      predefinedLeaveTime = changeAttendanceData.endzeit;
    }
    const update = {
      'allowedToLeaveAfterFinishedHomework': changeAttendanceData.allowedToLeave,
      'childUsername': changeAttendanceData.username,
      'latestArrivalTime': latestArrivalTime,
      'note': changeAttendanceData.note,
      'predefinedLeaveTime': predefinedLeaveTime
    };

     const params = {
       "update": update,
       "id": this.careId
     }

    this.parentController.updateAttendanceUsingPATCH1(params).toPromise().then((response) => {
      this.alertService.presentToastSuccess('Änderung erfolgreich');
    }).catch((error) => {
      console.log(error);
      this.alertService.presentToastFailure('Änderung fehlgeschlagen');
    });
  }

  async chooseOffer(name) {
    this.veranstaltungsDaten.changeVeranstaltung(name.toString());
  }

}

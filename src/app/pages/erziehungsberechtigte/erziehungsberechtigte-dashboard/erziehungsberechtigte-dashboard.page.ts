import { Component, OnInit, NgModule } from '@angular/core';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ParentControllerService } from 'src/app/api/services';
import { UserDTO, AfterSchoolCareDTO } from 'src/app/api/models';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

class IUserDTO implements UserDTO{
  
}

@Component({
  selector: 'app-erziehungsberechtigte-dashboard',
  templateUrl: './erziehungsberechtigte-dashboard.page.html',
  styleUrls: ['./erziehungsberechtigte-dashboard.page.scss'],
})
export class ErziehungsberechtigteDashboardPage implements OnInit {
  afterSchoolCares: any;
  veranstaltung: string;
  veranstaltungen:AfterSchoolCareDTO[];
  children: [];

  constructor(private alertService: AlertService, private router: Router, private alertController: AlertController, private veranstaltungsDaten: VeranstaltungensdatenService, public http: HttpClient, private parentController: ParentControllerService) {
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

    this.parentController.getChildsUsingGET(params).toPromise().then((children)=>{
        if (children.length === 0){
          this.createChildAlert();
        }
        }).catch((error)=>{
          console.log(error);
        });
  }

  async createChildAlert(){
    const alert = await this.alertController.create({
      header: "Achtung,",
      message: "Sie haben noch keine Kinder hinzugefügt, wollen Sie dies jetzt tun?",
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
    this.parentController.getBookedAfterSchoolCaresUsingGET(params).toPromise().then((cares)=>{
      // this.veranstaltungen = cares;
      cares.forEach((response)=>{
        for (let i = 0; i < response.attendances.length; i++) {
          console.log("ID: "+response.attendances[i].id)
        this.afterSchoolCares.push({"id":response.attendances[i].id, "startTime":response.startTime, "name": response.name, "endTime": response.endTime, "childName":response.attendances[i].child.fullname});
        console.table(this.afterSchoolCares)
        }
      });
      console.table(this.veranstaltungen);
    }).catch((error)=>{
      console.log(error);
    });
  }

  async deleteAttendance(id) {
    const alert = await this.alertController.create({
      header: "Warnung,",
      message: "Wollen Sie ihr Kind wirklich abmelden?",
      buttons: [{text: 'Ja',
                role: 'confirm',
                handler: () => {
                  this.parentController.deleteAttendanceUsingDELETE(id).toPromise().then(()=>{
                    this.getVeranstaltungen();
                    this.alertService.presentToastSuccess('Ihr Kind wurde abgemeldet');
                  }).catch((error)=>{
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

  async chooseOffer(name){
    this.veranstaltungsDaten.changeVeranstaltung(name.toString());
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GebuchteVeranstaltungen } from 'src/app/models/gebuchteVeranstalungen';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-veranstaltung-buchen',
  templateUrl: './veranstaltung-buchen.page.html',
  styleUrls: ['./veranstaltung-buchen.page.scss'],
})
export class VeranstaltungBuchenPage implements OnInit {

  veranstaltungen:any;
  private datum:any;

  constructor(private auth: AuthenticationService, private alertController: AlertController) {
    this.veranstaltungen = [
      new GebuchteVeranstaltungen("Hausaufgaben mit Joe"),
      new GebuchteVeranstaltungen("Nachmittagsbetreuung mit Paula"),
      new GebuchteVeranstaltungen("Fördeunterricht"),
      new GebuchteVeranstaltungen("Arbeitsgemeinschaft"),
      new GebuchteVeranstaltungen("Verstärkung")
    ]
   }

  ngOnInit() {
  }
  async chooseOffer(model:GebuchteVeranstaltungen){
    const alert = await this.alertController.create({
      header: model.veranstaltung,
      buttons: ['OK']
    });

    await alert.present();
  }
  logout() {
    this.auth.logout();
  }
}

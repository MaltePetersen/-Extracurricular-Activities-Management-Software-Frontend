import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GebuchteVeranstaltungen } from 'src/app/models/gebuchteVeranstalungen';
import { AlertController } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EnvService } from 'src/app/services/env.service';
import { environment } from 'src/environments/environment';
import { GebuchterZeitraum } from 'src/app/models/gebuchterZeitraum';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';

@Component({
  selector: 'app-veranstaltung-buchen-zeitraum',
  templateUrl: './veranstaltung-buchen-zeitraum.page.html',
  styleUrls: ['./veranstaltung-buchen-zeitraum.page.scss'],
})
export class VeranstaltungBuchenZeitraumPage implements OnInit {
  veranstaltung: string;
  zeit: any;
  days: any;
  private datum: any;

  constructor(private alertController: AlertController, public router : Router ,public http: HttpClient, private env: EnvService, private veranstaltungsDaten: VeranstaltungensdatenService) {
    this.getVeranstaltungen();

    this.days = [
      new GebuchteVeranstaltungen("Montag", this.zeit),
      new GebuchteVeranstaltungen("Dienstag", this.zeit),
      new GebuchteVeranstaltungen("Mittwoch", this.zeit),
      new GebuchteVeranstaltungen("Donnestag", this.zeit),
      new GebuchteVeranstaltungen("Freitag", this.zeit)
    ]
   }

   getVeranstaltungen() {
    this.zeit = [
      new GebuchterZeitraum("13:00 - 15:00 Uhr", "Deutsch"),
    ];
  }

  toggleSelection(i){
    this.days[i].open = !this.days[i].open;
  }

  toggleItem(i, j){
    this.days[i].children[j].open = !this.days[i].children.open[j];
  }

  async chooseOffer(name){
    const alert = await this.alertController.create({
      header: name,
      buttons: ['OK']
    });
  }

  ngOnInit() {
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung)
  }

}

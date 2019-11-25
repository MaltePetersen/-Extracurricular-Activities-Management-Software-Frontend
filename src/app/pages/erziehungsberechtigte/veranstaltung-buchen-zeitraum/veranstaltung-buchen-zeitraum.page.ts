import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GebuchteVeranstaltungen } from 'src/app/models/gebuchteVeranstalungen';
import { AlertController } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EnvService } from 'src/app/services/env.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-veranstaltung-buchen-zeitraum',
  templateUrl: './veranstaltung-buchen-zeitraum.page.html',
  styleUrls: ['./veranstaltung-buchen-zeitraum.page.scss'],
})
export class VeranstaltungBuchenZeitraumPage implements OnInit {

  veranstaltungen:any;
  zeiten:any
  days: any;
  private datum:any;

  constructor(private alertController: AlertController, public router : Router ,public http: HttpClient, private env: EnvService) {
    this.getVeranstaltungen();
    this.days = [
      new GebuchteVeranstaltungen("Montag", this.zeiten.name),
      new GebuchteVeranstaltungen("Dienstag", this.zeiten.name),
      new GebuchteVeranstaltungen("Mittwoch", this.zeiten.name),
      new GebuchteVeranstaltungen("Donnestag", this.zeiten.name),
      new GebuchteVeranstaltungen("Freitag", this.zeiten.name)
    ]
   }

   getVeranstaltungen() {
    this.http.get<school[]>(`${environment.apiUrl}/api/schools`).subscribe((a) => {
      this.zeiten = a;
    });
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
  }

}

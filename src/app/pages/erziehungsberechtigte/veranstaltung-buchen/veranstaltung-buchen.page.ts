import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GebuchteVeranstaltungen } from 'src/app/models/gebuchteVeranstalungen';
import { AlertController } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EnvService } from 'src/app/services/env.service';
import { environment } from 'src/environments/environment';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';

@Component({
  selector: 'app-veranstaltung-buchen',
  templateUrl: './veranstaltung-buchen.page.html',
  styleUrls: ['./veranstaltung-buchen.page.scss'],
})
export class VeranstaltungBuchenPage implements OnInit {
  
  veranstaltung: string;
  kindername: string;
  kinderid: string; 
  veranstaltungen:any;
  private datum:any;

  constructor(private alertController: AlertController, public router : Router ,public http: HttpClient, private env: EnvService, private veranstaltungsDaten: VeranstaltungensdatenService) {
    this.getVeranstaltungen();
   }

  ngOnInit() {
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
    this.veranstaltungsDaten.ausgewähltesKind.subscribe(kindername => this.kindername = kindername);
    this.veranstaltungsDaten.ausgewählteID.subscribe(kinderid => this.kinderid = kinderid);
  }

  getVeranstaltungen() {
    this.http.get<school[]>(`${environment.apiUrl}/api/schools`).subscribe((a) => {
      this.veranstaltungen = a;
      console.log(a);
    });
  }

  async chooseChild(kindername: any){

    let kinderdaten = kindername.target.value.toString().split(" ");
    let name = kinderdaten[0].toString();
    let id  = kinderdaten[1].toString();
    
    this.veranstaltungsDaten.changeKind(name);
    this.veranstaltungsDaten.changeKindId(id);  

  }

  async chooseOffer(name){
    console.log("Momentamer Name: "+this.kindername);
    if (this.kindername === "kindername") {

       const alert = await this.alertController.create({
       header: "Fehler",
       message: "Bitte wähle zuerst das Kind aus!",
       buttons: ['OK']
    });

    await alert.present();
      
    } else {
    this.veranstaltungsDaten.changeVeranstaltung(name.toString());
    // const alert = await this.alertController.create({
    //   header: name,
    //   buttons: ['OK']
    //});

    //await alert.present();
    this.router.navigate(['veranstaltung-buchen-zeitraum']);
  }
  }

}

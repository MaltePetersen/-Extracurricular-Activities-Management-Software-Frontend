import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { Children } from 'src/app/models/children';

@Component({
  selector: 'app-veranstaltung-buchen',
  templateUrl: './veranstaltung-buchen.page.html',
  styleUrls: ['./veranstaltung-buchen.page.scss'],
})
export class VeranstaltungBuchenPage implements OnInit {
  
  children: any;
  veranstaltung: string;
  kindername = null; 
  kinderid: string; 
  veranstaltungen:any;
  private datum:any;

  constructor(private alertController: AlertController, public router : Router ,public http: HttpClient, private veranstaltungsDaten: VeranstaltungensdatenService) {
    this.getChildren();
    this.getVeranstaltungen();
   }

  ngOnInit() {
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
    this.veranstaltungsDaten.ausgewähltesKind.subscribe(kindername => this.kindername = kindername);
    this.veranstaltungsDaten.ausgewählteID.subscribe(kinderid => this.kinderid = kinderid);
  }

  getChildren() {
    this.http.get<Children[]>(`${environment.devApiUrl}/api/parent/childs`).subscribe(async (a) => {
      console.log("Kinder werden abgefragt")
      console.log(a);
      this.children = await a;
    });
}

  getVeranstaltungen() {
    this.http.get(`${environment.apiUrl}/api/parent/after_school_cares`).subscribe((a) => {
      this.veranstaltungen = a;
      console.log(a);
    });
  }

 chooseChild(kindername: any){

    // let kinderdaten = kindername.target.value.toString().split(" ");
    // let name = kinderdaten[0].toString();
    // let id  = kinderdaten[1].toString();
    
    // this.veranstaltungsDaten.changeKind(name);
    // this.veranstaltungsDaten.changeKindId(id);  
    let kinderdaten =  kindername.target.value.toString();
    console.log("Kindername: " + kindername.target.value.toString())
    this.veranstaltungsDaten.changeKind(kinderdaten);

  }

  async chooseOffer(name, id){
    console.log("Momentamer Name: "+this.kindername);
    if (this.kindername === "kindername" || this.kindername === null  ) {

       const alert = await this.alertController.create({
       header: "Fehler",
       message: "Bitte wähle zuerst das Kind aus!",
       buttons: ['OK']
    });

    await alert.present();
      
    } else {
    this.veranstaltungsDaten.changeVeranstaltung(name.toString());
    console.log('ID: '+id)
    this.veranstaltungsDaten.changeVeranstaltungId(id);
    
    // const alert = await this.alertController.create({
    //   header: name,
    //   buttons: ['OK']
    //});

    //await alert.present();
    this.router.navigate(['parent/veranstaltung-buchen-zeitraum']);
  }
  }

}

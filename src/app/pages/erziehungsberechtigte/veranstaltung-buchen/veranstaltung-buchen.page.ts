import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { Children } from 'src/app/models/children';
import { ParentControllerService } from 'src/app/api/services';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import moment from "moment"; 

@Component({
  selector: 'app-veranstaltung-buchen',
  templateUrl: './veranstaltung-buchen.page.html',
  styleUrls: ['./veranstaltung-buchen.page.scss'],
})
export class VeranstaltungBuchenPage implements OnInit {
  schoolId:number;
  startDate:any;
  endDate:any;
  
  children: any;
  veranstaltung: string;
  kindername = null; 
  kinderid: string; 
  veranstaltungen:any;
  private datum:any;

  constructor(private alertController: AlertController, private parentController: ParentControllerService, public router : Router ,public http: HttpClient, private veranstaltungsDaten: VeranstaltungensdatenService) {
    this.getChildren();
    this.getVeranstaltungen();
   }

  ngOnInit() {
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
    this.veranstaltungsDaten.ausgewähltesKind.subscribe(kindername => this.kindername = kindername);
    this.veranstaltungsDaten.ausgewählteID.subscribe(kinderid => this.kinderid = kinderid);
  }

  getChildren() {
    this.http.get<Children[]>(`${environment.apiUrl}/api/parent/children`).subscribe(async (a) => {
      this.children = await a;
      console.table(a)
    });
}

  getVeranstaltungen() {
    let params = {};
      this.parentController.getAfterSchoolCaresUsingGET1(params).toPromise().then(response => {
        this.veranstaltungen = response;
        });
  }

 chooseChild(kindername: any){
   let schoolId = kindername.target.value.split(":");
   console.log(schoolId[1])
    let kinderdaten =  kindername.target.value.toString();
    console.log("Kindername: " + kindername.target.value.toString())
    this.veranstaltungsDaten.changeKind(kinderdaten);
    this.veranstaltungsDaten.changeChildSchoolId(schoolId[1]);
  }



  async chooseOffer(name, type){
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
    console.log('Type: ' + type)
    this.veranstaltungsDaten.changeVeranstaltungType(type);
    
    // const alert = await this.alertController.create({
    //   header: name,
    //   buttons: ['OK']
    //});

    //await alert.present();
    this.router.navigate(['parent/veranstaltung-buchen-zeitraum']);
  }
  }

}

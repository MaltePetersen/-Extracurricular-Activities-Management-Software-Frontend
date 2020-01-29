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
    this.http.get<Children[]>(`${environment.devApiUrl}/api/parent/childs`).subscribe(async (a) => {
      console.log("Kinder werden abgefragt")
      console.log(a);
      this.children = await a;
    });
}

  getVeranstaltungen() {
    let params = {
      //school:this.schoolId,
      // startDate:this.startDate.format('YYYY-MM-DD[T]HH:mm:ss'),
      // endDate:this.endDate.format('YYYY-MM-DD[T]HH:mm:ss')
    }
      this.parentController.getAfterSchoolCaresUsingGET1(params).toPromise().then(response => {
        console.log(response);
        });
      console.log("AFTER SCHOOL CARES")
      console.table(this.veranstaltungen)

    // this.http.get(`${environment.apiUrl}/api/parent/after_school_cares`).subscribe((a) => {
    //   this.veranstaltungen = a;
    //   console.log(a);
    // });
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

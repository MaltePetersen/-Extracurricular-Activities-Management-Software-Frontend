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
import { SimpleUserDTO } from 'src/app/api/models';

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
  veranstaltungen:any;
  private datum:any;

  constructor(private alertController: AlertController, private parentController: ParentControllerService, public router : Router ,public http: HttpClient, private veranstaltungsDaten: VeranstaltungensdatenService) {
    
   }

  ngOnInit() {
    this.getChildren();
    this.getVeranstaltungen();
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
  }

  getChildren() {
    const params = {
    };
    this.parentController.getChildsUsingGET(params).toPromise().then((children)=>{
      this.children = children;
    });
  }

  getVeranstaltungen() {
    let params = {};
    this.parentController.getAfterSchoolCaresUsingGET1(params).toPromise().then(response => {
      this.veranstaltungen = response;
    });
  }

  childChange(username:string){
    let child:SimpleUserDTO = this.children.find(child => child.username === username);
    this.setChildValues(child);
  }

  setChildValues(selectedChild:SimpleUserDTO){
    this.veranstaltungsDaten.changeChild(selectedChild);
    this.veranstaltungsDaten.changeChildSchoolId(selectedChild.childSchool);
    this.kindername = selectedChild.fullname;
  }



  async chooseOffer(name, type, id){
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
    console.log('ID: ' + id)
    this.veranstaltungsDaten.changeveranstaltungsTypID(id);
    
    // const alert = await this.alertController.create({
    //   header: name,
    //   buttons: ['OK']
    //});

    //await alert.present();
    this.router.navigate(['parent/veranstaltung-buchen-zeitraum']);
  }
  }

}

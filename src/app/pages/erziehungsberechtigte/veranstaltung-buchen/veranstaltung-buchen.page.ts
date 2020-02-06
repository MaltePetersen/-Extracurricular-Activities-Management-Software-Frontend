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
import { SimpleUserDTO, AfterSchoolCareDTO } from 'src/app/api/models';
import { ParentProviderService } from 'src/app/services/parent-provider.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-veranstaltung-buchen',
  templateUrl: './veranstaltung-buchen.page.html',
  styleUrls: ['./veranstaltung-buchen.page.scss'],
})
export class VeranstaltungBuchenPage implements OnInit {
  schoolId:number;
  startDate:any;
  endDate:any;
  
  children:SimpleUserDTO[];
  veranstaltung: string;
  childName = null; 
  veranstaltungen:AfterSchoolCareDTO[];

  constructor(private alertController: AlertController, private alertService:AlertService, private parentController: ParentControllerService, public router : Router ,public http: HttpClient, private veranstaltungsDaten: VeranstaltungensdatenService, private parentProvider:ParentProviderService) {
    
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
    this.childName = child.fullname;
    this.parentProvider.setSelectedChild(child);
  }

  chooseOffer(name, type, id){
    if (this.childName === null || this.childName === 'Kindername') {
      this.alertService.presentToastFailure('Wählen Sie ein Kind!');
    } else {
      this.parentProvider.setTypeId(type);
      this.parentProvider.setTypeName(name);
      this.router.navigate(['parent/veranstaltung-buchen-zeitraum']);
    }
  }
}

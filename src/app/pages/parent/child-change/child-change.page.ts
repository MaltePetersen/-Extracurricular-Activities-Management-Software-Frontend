import { Component, OnInit} from '@angular/core';
import { ChilddataService } from 'src/app/services/childdata.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ParentControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-child-change',
  templateUrl: './child-change.page.html',
  styleUrls: ['./child-change.page.scss'],
})
export class ChildChangePage implements OnInit {

  username:string;
  fullname:string;
  schoolClass:string;
  previousUserName:string;


  constructor(private alertController: AlertController,  private router: Router,private alertService: AlertService ,private parentController:ParentControllerService) { }

  ngOnInit() {
    this.username = this.router.getCurrentNavigation().extras.state.username;
    this.fullname = this.router.getCurrentNavigation().extras.state.fullname;
    this.schoolClass = this.router.getCurrentNavigation().extras.state.schoolClass;
    this.previousUserName = this.router.getCurrentNavigation().extras.state.username;
  }

  saveChanges(){
    const update = {
      "fullname":this.fullname,
      "schoolClass":this.schoolClass
    };
    const patch = {
      "update":update,
      "username":this.previousUserName
    };
    console.log(patch);
    this.parentController.updateChildUsingPATCH(patch).toPromise().then((response)=>{
      console.log(response);
      this.presentSaveSuccess();
    }).catch((error)=>{
      console.log(error);
      this.presentSaveFailure();
    });
  }

  async presentSaveSuccess(){
    const alert = await this.alertController.create({
      header: "Speichern erfolgreich",
      message: "Die Änderungen wurden erfolgreich übernommen.",
      buttons: [
      {
        text: 'OK',
        handler: ()=> {
          this.router.navigateByUrl('parent/child-overview');
        },
      }]
    });
    await alert.present();
  }

  async presentSaveFailure(){
    const alert = await this.alertController.create({
      header: "Speichern abgebrochen",
      message: "Die Änderungen konnten nicht übernommen werden",
      buttons: [
      {
        text: 'OK',
        handler: ()=> {
        },
      }]
    });
    await alert.present();
  }

  abort(){
    this.router.navigateByUrl('parent/child-overview');
  }

  deleteChild():Promise<string>{
    return this.parentController.deleteChildUsingDELETE(this.previousUserName).toPromise();
  }

  async deleteAccount(){
    const alert = await this.alertController.create({
      header: "Löschen",
      message: "Wolle Sie den Account wirklich löschen? Dieser Vorgang kann nicht rückgängig gemacht werden.",
      buttons: [
      {
        text: 'OK',
        handler: ()=> {
          this.deleteChild().then((response)=>{
            console.log(response);
            this.alertService.presentToastSuccess('Der Account wurde gelöscht');
            this.router.navigateByUrl('parent/child-overview');
          }).catch((error)=>{
            console.log(error);
            this.alertService.presentToastFailure("Der Account konnte nicht gelöscht werden");
          });
        }
      },
      {
        text: 'Abbrechen',
        handler: ()=> {
          
        }
      }]
    });
    await alert.present();
  }

  async changePassword(){
    const alert = await this.alertController.create({
      header: "Passwort ändern erfolgreich",
      message: "Das Passwort wurde erfolgreich geändert.",
      buttons: [
        {
          text: 'OK',
          handler: ()=> {
          this.router.navigateByUrl('parent/child-overview');
        },
      }]
    });
    await alert.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ParentControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private alertController: AlertController,  private router: Router,private alertService: AlertService, private parentController:ParentControllerService) { }

  editUsername:boolean = false;
  editName:boolean = false;
  editPassword:boolean = false;
  previousUsername:string;
  username: string;
  firstname:string;
  lastname:string;

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getAccount();
  }

  getAccount(){
    const params = {
    };

    this.parentController.getParentUsingGET(params).toPromise().then((parent)=>{
      let parentData = parent as {username:string, fullname:string};
      this.username = parentData.username;
      this.previousUsername = parentData.username;
      this.firstname = parentData.fullname.split(" ")[0];
      this.lastname = parentData.fullname.split(" ")[1];
    });
  }

  async saveChanges(){
    let fullname = this.firstname + " " + this.lastname;
    let update;
    if(this.username === this.previousUsername){
      update = {
        fullname:fullname
      };
    } else {
      update = {
        username:this.username,
        fullname:fullname
      };
    }
    
    const params = {
      update:update
    }
    this.parentController.updateParentUsingPATCH(params).toPromise().then((response)=>{
      this.alertService.presentToastSuccess("Änderungen erfolgreich gespeichert");
      this.getAccount();
    }).catch((error)=>{
      this.alertService.presentToastFailure("Änderungen konnten nicht übernommen werden");
      console.log(error);
    });
  }

  abort(){
    this.router.navigateByUrl('parent/erziehungsberechtigte-dashboard');
  }

  async deleteAccount(){
    const alert = await this.alertController.create({
      header: "Löschen",
      message: "Wolle Sie den Account wirklich löschen? Dieser Vorgang kann nicht rückgängig gemacht werden.",
      buttons: [{text: 'OK',
      handler: ()=> {
        this.alertService.presentToast('Der Account wurde gelöscht');
        this.router.navigateByUrl('/login');
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

  async resetPassword(){
    const alert = await this.alertController.create({
      header: "Zurücksetzen",
      message: "Wolle Sie ihr Passwort wirklich zurücksetzen?",
      buttons: [{text: 'OK',
      handler: ()=> {
        this.alertService.presentToastSuccess('Ihr Passwort wurde zurückgesetzt!');
        this.router.navigateByUrl('/login');
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
}

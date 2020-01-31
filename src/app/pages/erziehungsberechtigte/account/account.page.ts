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

  username: string;
  fname: string;

  ngOnInit() {
    this.username ="Peter";
    this.fname ="Klaus-Dieter";
  }

  getAccount(){
  }

  async saveChanges(){
    console.log(this.username)
    console.log(this.fname)
    const alert = await this.alertController.create({
      header: "Speichern erfolgreich",
      message: "Die Änderungen wurden erfolgreich übernommen.",
      buttons: [{text: 'OK',
                handler: ()=> {
                  this.router.navigateByUrl('parent/erziehungsberechtigte-dashboard');
                },
              }]
    });
    await alert.present();

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
      {text: 'Abbrechen',
      handler: ()=> {
        this.router.navigateByUrl('parent/erziehungsberechtigte-dashboard');
      }
    }]
});
    await alert.present();
  }

  async changePassword(){
    const alert = await this.alertController.create({
      header: "Passwort ändern erfolgreich",
      message: "Das Passwort wurde erfolgreich geändert.",
      buttons: [{text: 'OK',
      handler: ()=> {
        this.router.navigateByUrl('parent/erziehungsberechtigte-dashboard');
      },
    }]
});
    await alert.present();
  }

}

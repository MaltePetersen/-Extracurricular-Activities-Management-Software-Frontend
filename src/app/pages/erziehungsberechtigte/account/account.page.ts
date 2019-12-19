import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private alertController: AlertController,  private router: Router,private alertService: AlertService) { }

  username: string;
  fname: string;

  ngOnInit() {
    this.username ="Peter";
    this.fname ="Klaus-Dieter";
  }

  async saveChanges(){
    console.log(this.schoolClass)
    console.log(this.username)
    console.log(this.fname)
    const alert = await this.alertController.create({
      header: "Speichern erfolgreich",
      message: "Die Änderungen wurden erfolgreich übernommen.",
      buttons: [{text: 'OK',
                handler: ()=> {
                  this.router.navigateByUrl('/erziehungsberechtigte-dashboard');
                },
              }]
    });
    await alert.present();

  }

  abort(){
    this.router.navigateByUrl('/erziehungsberechtigte-dashboard');
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
        this.router.navigateByUrl('/erziehungsberechtigte-dashboard');
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
        this.router.navigateByUrl('/erziehungsberechtigte-dashboard');
      },
    }]
});
    await alert.present();
  }

}

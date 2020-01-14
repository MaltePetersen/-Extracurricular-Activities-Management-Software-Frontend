import { Component, OnInit} from '@angular/core';
import { KinderdatenService } from 'src/app/services/kinderdaten.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kind-bearbeiten',
  templateUrl: './kind-bearbeiten.page.html',
  styleUrls: ['./kind-bearbeiten.page.scss'],
})
export class KindBearbeitenPage implements OnInit {

  kinderdaten: any;
  username: string;
  fullname: string;
  schoolClass: string;


  constructor(private childData: KinderdatenService, public http: HttpClient, private alertController: AlertController,  private router: Router,private alertService: AlertService) { }

  ngOnInit() {
    //this.childData.currentChildData.subscribe(kinderdaten => this.kinderdaten = kinderdaten);
    this.childData.currentChildData.subscribe(kinderdaten => this.fullname = kinderdaten.fullname);
    this.childData.currentChildData.subscribe(kinderdaten => this.schoolClass = kinderdaten.schoolClass);
    this.childData.currentChildData.subscribe(kinderdaten => this.username = kinderdaten.username);
  }

  async saveChanges(){
    const alert = await this.alertController.create({
      header: "Speichern erfolgreich",
      message: "Die Änderungen wurden erfolgreich übernommen.",
      buttons: [{text: 'OK',
                handler: ()=> {
                  this.router.navigateByUrl('/kind-uebersicht');
                },
              }]
    });
    await alert.present();

  }

  abort(){
    this.router.navigateByUrl('/kind-uebersicht');
  }

  getChildData(id) {
    this.http.get<school[]>(`${environment.apiUrl}/api/parent/child/` + id).subscribe((a) => {
      this.kinderdaten = a;
      console.log("ERFOLG KIND GELADEN");
      console.log(this.kinderdaten);
    });
  }

  async deleteAccount(){
    const alert = await this.alertController.create({
      header: "Löschen",
      message: "Wolle Sie den Account wirklich löschen? Dieser Vorgang kann nicht rückgängig gemacht werden.",
      buttons: [{text: 'OK',
      handler: ()=> {
        this.alertService.presentToast('Der Account wurde gelöscht');
        this.router.navigateByUrl('/kind-uebersicht');
      }
    },
      {text: 'Abbrechen',
      handler: ()=> {
        this.router.navigateByUrl('/kind-uebersicht');
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
        this.router.navigateByUrl('/kind-uebersicht');
      },
    }]
});
    await alert.present();
  }


}

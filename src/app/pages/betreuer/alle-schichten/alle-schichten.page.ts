import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { alleSchichtenmodel } from 'src/app/models/alle-Schichten-model';
import { SchichtModel } from 'src/app/models/schicht-model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-alle-schichten',
  templateUrl: './alle-schichten.page.html',
  styleUrls: ['./alle-schichten.page.scss'],
})
export class AlleSchichtenPage implements OnInit {

  days: any;

  constructor(public navCtrl: NavController, private alertController: AlertController) {
    let schichten = [
      new SchichtModel("Testschule", "01.01.2019", "19:00", "Montag")
    ];

    this.days = [
      new alleSchichtenmodel("Montag", schichten),
      new alleSchichtenmodel("Dienstag", schichten),
      new alleSchichtenmodel("Mittwoch", schichten),
      new alleSchichtenmodel("Donnestag", schichten),
      new alleSchichtenmodel("Freitag", schichten)
    ];
  }

  ngOnInit() {
  }

  toggleSelection(i){
    this.days[i].open = !this.days[i].open;
  }

  toggleItem(i, j){
    this.days[i].children[j].open = !this.days[i].children.open[j];
  }

  async presentAlert(model:SchichtModel){
    const alert = await this.alertController.create({
      header: model.schule,
      message: model.day + ", den " + model.datum,
      buttons: ['OK']
    });

    await alert.present();
  }

}

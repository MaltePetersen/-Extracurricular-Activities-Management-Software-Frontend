import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
import { NgModel } from '@angular/forms';
import { SchuelerModel } from 'src/app/models/schueler-model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-schueler-anmelden',
  templateUrl: './schueler-anmelden.page.html',
  styleUrls: ['./schueler-anmelden.page.scss'],
})
export class SchuelerAnmeldenPage implements OnInit {


  classes : any;
  schueler : any;

  private datum:any;
  
  constructor(private alertController: AlertController) { 
    this.classes = [
      '1a',
      '2b',
      '3c'
    ]
    this.schueler = [
      new SchuelerModel("Birgit", "Klaus Groth Schule", "5b", "15:00", "Muss nach Hause getragen werden", 0),
      new SchuelerModel("Klaus", "Klaus Groth Schule", "6b", "16:00", "Faehrt mit dem Bus", 1),
      new SchuelerModel("Timo", "Klaus Groth Schule", "7b", "17:00", "Faehrt mit der Bahn", 2),
      new SchuelerModel("Max", "Klaus Groth Schule", "8b", "18:00", "Wird abgeholt", 3)
    ]
  }

  ngOnInit() {
  }

  async presentAlert(model:SchuelerModel){
    const alert = await this.alertController.create({
      header: model.name,
      message: "Schule: " + model.schule + "<br/>" + "Klasse: " + model.klasse + "<br/>" + "Betreuungsende: " + model.betreuungsende + "<br/>" + "Info: " + model.info,
      buttons: ['OK']
    });

    await alert.present();
  }
}

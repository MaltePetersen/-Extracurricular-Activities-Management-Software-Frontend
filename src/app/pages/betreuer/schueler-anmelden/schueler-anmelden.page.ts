import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
import { NgModel } from '@angular/forms';
import { SchuelerModel } from 'src/app/models/schueler-model';

@Component({
  selector: 'app-schueler-anmelden',
  templateUrl: './schueler-anmelden.page.html',
  styleUrls: ['./schueler-anmelden.page.scss'],
})
export class SchuelerAnmeldenPage implements OnInit {


  classes : any;
  schueler : any;

  private datum:any;
  
  constructor() { 
    this.classes = [
      '1a',
      '2b',
      '3c'
    ]
    this.schueler = [
      new SchuelerModel("Birgit", "Klaus Groth Schule", "5b", "15:00", "Muss nach Hause getragen werden", "angemeldet"),
      new SchuelerModel("Birgit", "Klaus Groth Schule", "5b", "15:00", "Muss nach Hause getragen werden", "angemeldet"),
      new SchuelerModel("Birgit", "Klaus Groth Schule", "5b", "15:00", "Muss nach Hause getragen werden", "angemeldet"),
      new SchuelerModel("Birgit", "Klaus Groth Schule", "5b", "15:00", "Muss nach Hause getragen werden", "angemeldet")
    ]
  }

  ngOnInit() {
  }
}

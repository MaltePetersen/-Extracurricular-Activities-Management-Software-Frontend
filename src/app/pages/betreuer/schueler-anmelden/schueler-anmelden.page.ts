import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';
import { NgModel } from '@angular/forms';
import { SchuelerModel } from 'src/app/models/schueler-model';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-schueler-anmelden',
  templateUrl: './schueler-anmelden.page.html',
  styleUrls: ['./schueler-anmelden.page.scss'],
})
export class SchuelerAnmeldenPage implements OnInit {


  classes : any;
  schueler : any;

  private datum:any;
  
  constructor(private dialogs: Dialogs) { 
    this.classes = [
      '1a',
      '2b',
      '3c'
    ]
    this.schueler = [
      new SchuelerModel("Birgit", "Klaus Groth Schule", "5b", "15:00", "Muss nach Hause getragen werden", 0),
      new SchuelerModel("Birgit", "Klaus Groth Schule", "5b", "15:00", "Muss nach Hause getragen werden", 1),
      new SchuelerModel("Birgit", "Klaus Groth Schule", "5b", "15:00", "Muss nach Hause getragen werden", 2),
      new SchuelerModel("Birgit", "Klaus Groth Schule", "5b", "15:00", "Muss nach Hause getragen werden", 3)
    ]
  }

  ngOnInit() {
  }
}

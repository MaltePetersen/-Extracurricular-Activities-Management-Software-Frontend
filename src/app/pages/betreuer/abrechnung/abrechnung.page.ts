import { Component, OnInit } from '@angular/core';
import { SchichtModel } from 'src/app/models/schicht-model';

@Component({
  selector: 'app-abrechnung',
  templateUrl: './abrechnung.page.html',
  styleUrls: ['./abrechnung.page.scss'],
})
export class AbrechnungPage implements OnInit {

  schichten:any;

  private datum:any;
  
  constructor() {
    this.schichten = [
      new SchichtModel("Klaus Groth Schule", "17.10.2019", "10:00", "Donnerstag")
    ]
  }

  ngOnInit() {
  }

}

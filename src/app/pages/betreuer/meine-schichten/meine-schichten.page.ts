import { Component, OnInit } from '@angular/core';
import { SchichtModel } from 'src/app/models/schicht-model';

@Component({
  selector: 'app-meine-schichten',
  templateUrl: './meine-schichten.page.html',
  styleUrls: ['./meine-schichten.page.scss'],
})
export class MeineSchichtenPage implements OnInit {

  schichten:any;

  private datum:any;

  constructor() { 
    this.schichten = [
      new SchichtModel("Klaus Groth Schule", "17.10.2019", "10:00")
    ]
  }

  ngOnInit() {
  }

}

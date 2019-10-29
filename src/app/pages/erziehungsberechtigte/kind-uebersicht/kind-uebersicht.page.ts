import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KinderAnzeigen } from 'src/app/models/kinder-model';

@Component({
  selector: 'app-kind-uebersicht',
  templateUrl: './kind-uebersicht.page.html',
  styleUrls: ['./kind-uebersicht.page.scss'],
})
export class KindUebersichtPage implements OnInit {

  kinder: any;

  constructor(private router: Router) {
    this.kinder = [
      new KinderAnzeigen('Peter', 'Paulsen', '7a', 'Dingsbums Schule'),
    ];
  }

  ngOnInit() {
    
  }
  navToKindHinzu() {
    this.router.navigateByUrl('/kind-hinzufuegen');
  }

}

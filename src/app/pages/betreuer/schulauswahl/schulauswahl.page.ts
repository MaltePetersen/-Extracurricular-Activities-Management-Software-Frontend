import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schulauswahl',
  templateUrl: './schulauswahl.page.html',
  styleUrls: ['./schulauswahl.page.scss'],
})
export class SchulauswahlPage implements OnInit {

  schools : any;

  constructor(public router : Router) {
    this.schools = [
    'Holstenschule',
    'Klaus Groth Schule',
    'Wilhelm Tank Schule'
  ];
  }

  ngOnInit() {
  }

  schoolClick() {
    this.router.navigate(['schueler-anmelden']);
  }

}

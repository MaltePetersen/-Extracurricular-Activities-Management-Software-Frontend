import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KinderAnzeigen } from 'src/app/models/kinder-model';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kind-uebersicht',
  templateUrl: './kind-uebersicht.page.html',
  styleUrls: ['./kind-uebersicht.page.scss'],
})
export class KindUebersichtPage implements OnInit {

  veranstaltung: string;
  kindername: string;
  kinderid: string; 
  veranstaltungen:any;
  kinder: any;

  constructor(public http: HttpClient, private router: Router, private veranstaltungsDaten: VeranstaltungensdatenService) {
    this.getVeranstaltungen();



    this.kinder = [
      new KinderAnzeigen(this.veranstaltung, this.veranstaltung, '7a', this.veranstaltung),
    ];
  }

  getVeranstaltungen() {
    this.http.get<school[]>(`${environment.apiUrl}/api/schools`).subscribe((a) => {
      this.veranstaltungen = a;
      console.log(a);
    });
  }

  ngOnInit() {
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
  }
  navToKindHinzu() {
    this.router.navigateByUrl('/kind-hinzufuegen');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KinderAnzeigen } from 'src/app/models/kinder-model';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { KinderdatenService } from 'src/app/services/kinderdaten.service';

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
  kinderdaten: any;

  constructor(private childData: KinderdatenService, public http: HttpClient, private router: Router, private veranstaltungsDaten: VeranstaltungensdatenService) {
    this.datenZuweisen();
    }

  getVeranstaltungen() {
      this.http.get<school[]>(`${environment.apiUrl}/api/schools`).subscribe(async (a) => {
        this.veranstaltungen = await a;
      });
  }

  async datenZuweisen(){
    await this.getVeranstaltungen();
    setTimeout(()=> {
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
    this.kinder = [
      new KinderAnzeigen(this.veranstaltungen[0].name, this.veranstaltungen[0].address ,this.veranstaltungen[0].id, this.veranstaltungen[0].name),
      new KinderAnzeigen(this.veranstaltungen[1].name, this.veranstaltungen[1].address ,this.veranstaltungen[1].id, this.veranstaltungen[1].name),
      new KinderAnzeigen(this.veranstaltungen[2].name, this.veranstaltungen[2].address ,this.veranstaltungen[2].id, this.veranstaltungen[2].name),
    ];
  },400);
  }

  changeChildData(choosenChild: any){
    this.childData.changeChildData(choosenChild);
    this.router.navigateByUrl('/kind-bearbeiten');

  }


  ngOnInit() {
    this.childData.currentChildData.subscribe(kinderdaten => this.kinderdaten = kinderdaten);
  }

  navToKindHinzu() {
    this.router.navigateByUrl('/kind-hinzufuegen');
  }

}

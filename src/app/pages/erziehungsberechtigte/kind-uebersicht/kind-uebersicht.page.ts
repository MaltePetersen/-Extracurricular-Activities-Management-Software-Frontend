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
    console.log("1");
    this.datenZuweisen();
    }

  //Hier muss ich mich noch um Async Await kümmern
  async getVeranstaltungen() {
    let done = false;
    
    console.log("2");
      this.http.get<school[]>(`${environment.apiUrl}/api/schools`).subscribe(async (a) => {
        console.log("3");
        this.veranstaltungen = await a;
        console.log("this.veranstaltungen");
        console.log(this.veranstaltungen);
        done = true;
      });
  }

  async datenZuweisen(){
    await this.getVeranstaltungen();
    setTimeout(()=> {
    console.log("4");
    this.veranstaltungsDaten.ausgewählteVeranstaltung.subscribe(veranstaltung => this.veranstaltung = veranstaltung);
    this.kinder = [
      new KinderAnzeigen(this.veranstaltungen[0].name, this.veranstaltungen[0].address ,this.veranstaltungen[0].id, this.veranstaltungen[0].name),
      new KinderAnzeigen(this.veranstaltungen[1].name, this.veranstaltungen[1].address ,this.veranstaltungen[1].id, this.veranstaltungen[1].name),
      new KinderAnzeigen(this.veranstaltungen[2].name, this.veranstaltungen[2].address ,this.veranstaltungen[2].id, this.veranstaltungen[2].name),
    ];
  },400);
  }


  ngOnInit() {
  }

  navToKindHinzu() {
    this.router.navigateByUrl('/kind-hinzufuegen');
  }

}

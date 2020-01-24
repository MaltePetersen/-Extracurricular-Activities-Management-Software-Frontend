import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeranstaltungensdatenService } from 'src/app/services/veranstaltungensdaten.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { KinderdatenService } from 'src/app/services/kinderdaten.service';
import { Children } from 'src/app/models/children';

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

  constructor(private childData: KinderdatenService, public http: HttpClient, private router: Router, private veranstaltungsDaten: VeranstaltungensdatenService ) {
      this.datenZuweisen();
    }

  getChildren() {
      this.http.get<Children[]>(`${environment.apiUrl}/api/parent/children`).subscribe(async (a) => {
        console.log("Kinder werden abgefragt")
        console.log(a);
        this.kinder = await a;
      });
  }

  async datenZuweisen(){
    await this.getChildren();
  }

  changeChildData(choosenChild: any){
    this.childData.changeChildData(choosenChild);
    this.router.navigateByUrl('parent/kind-bearbeiten');

  }
  ionViewWillEnter(){
    this.datenZuweisen();
  }

  ngOnInit() {
    this.childData.currentChildData.subscribe(kinderdaten => this.kinderdaten = kinderdaten);
  }

  navToKindHinzu() {
    this.router.navigateByUrl('parent/kind-hinzufuegen');
  }

}

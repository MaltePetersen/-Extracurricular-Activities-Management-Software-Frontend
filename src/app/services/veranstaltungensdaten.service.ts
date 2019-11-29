import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeranstaltungensdatenService {

  private veranstalltungsTyp = new BehaviorSubject<string>("veranstaltungsTyp");
    ausgewählteVeranstaltung = this.veranstalltungsTyp.asObservable();

  constructor() { }

  changeVeranstaltung(veranstaltung: string) {
    this.veranstalltungsTyp.next(veranstaltung)
}
}
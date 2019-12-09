import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeranstaltungensdatenService {

  private veranstalltungsTyp = new BehaviorSubject<string>('veranstaltungsTyp');
  private kindername = new BehaviorSubject<string>('kindername');
    ausgewählteVeranstaltung = this.veranstalltungsTyp.asObservable();
    ausgewähltesKind = this.kindername.asObservable();

  constructor() { }

  changeVeranstaltung(veranstaltung: string) {
    this.veranstalltungsTyp.next(veranstaltung)
}

changeKind(kindername: string) {
  this.kindername.next(kindername);

}
}
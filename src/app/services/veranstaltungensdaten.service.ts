import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeranstaltungensdatenService {

  private veranstalltungsTyp = new BehaviorSubject<string>('veranstaltungsTyp');
  private kindername = new BehaviorSubject<string>('kindername');
  private kinderId = new BehaviorSubject<string>('kinderId');
    ausgewählteVeranstaltung = this.veranstalltungsTyp.asObservable();
    ausgewähltesKind = this.kindername.asObservable();
    ausgewählteID = this.kinderId.asObservable();

  constructor() { }

  changeVeranstaltung(veranstaltung: string) {
    this.veranstalltungsTyp.next(veranstaltung);
}

changeKind(kindername: string) {
  this.kindername.next(kindername);
}
changeKindId(kinderId: string) {
  this.kinderId.next(kinderId);
}
}
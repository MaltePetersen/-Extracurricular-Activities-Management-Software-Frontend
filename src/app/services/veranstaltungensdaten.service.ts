import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeranstaltungensdatenService {

  private veranstaltungsTyp = new BehaviorSubject<string>('veranstaltungsTyp');
  private veranstaltungsTypId = new BehaviorSubject<number>(0);
  private kindername = new BehaviorSubject<string>('kindername');
  private kinderId = new BehaviorSubject<string>('kinderId');
    ausgewählteVeranstaltung = this.veranstaltungsTyp.asObservable();
    ausgewählteVeranstaltungId = this.veranstaltungsTypId.asObservable();
    ausgewähltesKind = this.kindername.asObservable();
    ausgewählteID = this.kinderId.asObservable();

  constructor() { }

  changeVeranstaltung(veranstaltung: string) {
    this.veranstaltungsTyp.next(veranstaltung);
}

changeVeranstaltungId(veranstaltungId: number) {
  this.veranstaltungsTypId.next(veranstaltungId);
}

changeKind(kindername: string) {
  this.kindername.next(kindername);
}
changeKindId(kinderId: string) {
  this.kinderId.next(kinderId);
}
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeranstaltungensdatenService {

  private veranstaltungsTyp = new BehaviorSubject<string>('veranstaltungsTyp');
  private veranstaltungsType = new BehaviorSubject<number>(0);
  private kindername = new BehaviorSubject<string>('kindername');
  private kinderId = new BehaviorSubject<string>('kinderId');
  private schoolId = new BehaviorSubject<number>(null);
    ausgewählteVeranstaltung = this.veranstaltungsTyp.asObservable();
    ausgewählteVeranstaltungType = this.veranstaltungsType.asObservable();
    ausgewähltesKind = this.kindername.asObservable();
    ausgewählteID = this.kinderId.asObservable();
    ausgewählteSchulId = this.schoolId.asObservable();

  constructor() { }

  changeVeranstaltung(veranstaltung: string) {
    this.veranstaltungsTyp.next(veranstaltung);
}

changeVeranstaltungType(veranstaltungType: number) {
  this.veranstaltungsType.next(veranstaltungType);
}

changeKind(kindername: string) {
  this.kindername.next(kindername);
}

changeChildSchoolId(schoolId: number) {
  this.schoolId.next(schoolId);
}

changeKindId(kinderId: string) {
  this.kinderId.next(kinderId);
}


}
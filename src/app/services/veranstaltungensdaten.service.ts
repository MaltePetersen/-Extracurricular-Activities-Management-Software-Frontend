import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimpleUserDTO } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class VeranstaltungensdatenService {

  private veranstaltungsTyp = new BehaviorSubject<string>('veranstaltungsTyp');
  private veranstaltungsType = new BehaviorSubject<number>(0);
  private veranstaltungsTypID = new BehaviorSubject<number>(0);
  private child = new BehaviorSubject<SimpleUserDTO>(null);
  private kinderId = new BehaviorSubject<string>('kinderId');
  private schoolId = new BehaviorSubject<number>(null);
  ausgewählteVeranstaltung = this.veranstaltungsTyp.asObservable();
  ausgewählteVeranstaltungType = this.veranstaltungsType.asObservable();
  ausgewählteVeranstaltungsTypID = this.veranstaltungsTypID.asObservable();
  chosenChild = this.child.asObservable();
  ausgewählteID = this.kinderId.asObservable();
  ausgewählteSchulId = this.schoolId.asObservable();


  constructor() { }

  changeVeranstaltung(veranstaltung: string) {
    this.veranstaltungsTyp.next(veranstaltung);
  }

  changeVeranstaltungType(veranstaltungType: number) {
    this.veranstaltungsType.next(veranstaltungType);
  }

  changeveranstaltungsTypID(veranstaltungsTypID: number) {
    this.veranstaltungsTypID.next(veranstaltungsTypID);
  }

  changeChild(child:SimpleUserDTO) {
    this.child.next(child);
  }

  changeChildSchoolId(schoolId: number) {
    this.schoolId.next(schoolId);
  }

  changeKindId(kinderId: string) {
    this.kinderId.next(kinderId);
  }
}
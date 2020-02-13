import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimpleUserDTO } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class EventdateService {

  private eventType = new BehaviorSubject<string>('eventType');
  private eventType2 = new BehaviorSubject<number>(0);
  private eventTypeID = new BehaviorSubject<number>(0);
  private child = new BehaviorSubject<SimpleUserDTO>(null);
  private childId = new BehaviorSubject<string>('childId');
  private schoolId = new BehaviorSubject<number>(null);
  choosenEvent = this.eventType.asObservable();
  choosenEventType = this.eventType2.asObservable();
  choosenEventTypeID = this.eventTypeID.asObservable();
  chosenChild = this.child.asObservable();
  choosenID = this.childId.asObservable();
  choosenSchoolId = this.schoolId.asObservable();


  constructor() { }

  changeEvent(event: string) {
    this.eventType.next(event);
  }

  changeEventType(eventType: number) {
    this.eventType2.next(eventType);
  }

  changeEventTypeID(eventTypeID: number) {
    this.eventTypeID.next(eventTypeID);
  }

  changeChild(child:SimpleUserDTO) {
    this.child.next(child);
  }

  changeChildSchoolId(schoolId: number) {
    this.schoolId.next(schoolId);
  }

  changeChildId(childId: string) {
    this.childId.next(childId);
  }
}
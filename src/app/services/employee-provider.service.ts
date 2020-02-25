import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProviderService {

  public schoolId$:BehaviorSubject<number> = new BehaviorSubject<number>(null);
  public careId$:BehaviorSubject<number> = new BehaviorSubject<number>(null);


  constructor(private storage:Storage){
    this.load();
  }

  load():void {
    this.storage.get('schoolId').then((schoolId)=>{
      this.schoolId$.next(schoolId);
    });
    this.storage.get('careId').then((careId)=>{
      this.careId$.next(careId);
    });
  }

  updateSchoolId(schoolId:number):void {
    this.storage.set('schoolId', schoolId);
    this.schoolId$.next(schoolId);
  }

  updateCareId(careId:number):void{
    this.storage.set('careId', careId);
    this.careId$.next(careId);
  }
}

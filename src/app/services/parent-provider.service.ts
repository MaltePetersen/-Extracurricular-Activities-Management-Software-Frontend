import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SimpleUserDTO, AfterSchoolCareDTO, AfterSchoolCare } from '../api/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentProviderService {

  public typeId$:BehaviorSubject<number> = new BehaviorSubject<number>(null);
  public typeName$:BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public selectedChild$:BehaviorSubject<SimpleUserDTO> = new BehaviorSubject<SimpleUserDTO>(null);
  public selectedCare$:BehaviorSubject<AfterSchoolCareDTO> = new BehaviorSubject<AfterSchoolCareDTO>(null);

  constructor(private storage:Storage){
    this.load();
  }

  load(){
    this.storage.get('typeId').then((typeId)=>{
      this.typeId$.next(typeId);
    });
    this.storage.get('typeName').then((typeName)=>{
      this.typeName$.next(typeName);
    });
    this.storage.get('selectedChild').then((selectedChild)=>{
      this.selectedChild$.next(selectedChild);
    });
    this.storage.get('selectedCare').then((selectedCare)=>{
      this.selectedCare$.next(selectedCare);
    });
  }

  updateTypeId(typeId:number):void{
    this.storage.set('typeId', typeId);
    this.typeId$.next(typeId);
  }

  updateTypeName(typeName:string):void{
    this.storage.set('typeName', typeName);
    this.typeName$.next(typeName);
  }

  updateSelectedChild(selectedChild:SimpleUserDTO):void{
    this.storage.set('selectedChild', selectedChild);
    this.selectedChild$.next(selectedChild);
  }

  updateSelectedCare(selectedCare:AfterSchoolCareDTO):void{
    this.storage.set('selectedCare', selectedCare);
    this.selectedCare$.next(selectedCare);
  }
}

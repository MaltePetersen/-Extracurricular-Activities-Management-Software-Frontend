import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SimpleUserDTO, AfterSchoolCareDTO } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class ParentProviderService {

  constructor(private storage:Storage){
  }

  getTypeId():Promise<number>{
    return this.storage.get('typeId');
  }

  setTypeId(id:number){
    this.storage.set('typeId', id);
  }

  getTypeName():Promise<string>{
    return this.storage.get('typeName');
  }

  setTypeName(name:string){
    this.storage.set('typeName', name);
  }

  getSelectedChild():Promise<SimpleUserDTO>{
    return this.storage.get('selectedChild');
  }

  setSelectedChild(child:SimpleUserDTO){
    this.storage.set('selectedChild', child);
  }

  getSelectedCare():Promise<AfterSchoolCareDTO>{
    return this.storage.get('selectedCare');
  }

  setSelectedCare(care:AfterSchoolCareDTO){
    this.storage.set('selectedCare', care);
  }
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProviderService {


  constructor(private storage:Storage){
  }

  getSchoolId(){
    return this.storage.get('schoolId');
  }

  setSchoolId(id:number){
    this.storage.set('schoolId', id);
  }

  getCareId(){
    return this.storage.get('careId');
  }

  setCareId(id:number){
    this.storage.set('careId', id);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChilddataService {


    private childdata = new BehaviorSubject<any>("default message");
    currentChildData = this.childdata.asObservable();

    constructor() { }

    changeChildData(childdata: any){
        this.childdata.next(childdata);
    
      }
}
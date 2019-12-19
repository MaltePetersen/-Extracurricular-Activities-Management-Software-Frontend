import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KinderdatenService {


    private kinderdaten = new BehaviorSubject<any>("default message");
    currentChildData = this.kinderdaten.asObservable();

    constructor() { }

    changeChildData(kinderdaten: any){
        this.kinderdaten.next(kinderdaten);
    
      }
}
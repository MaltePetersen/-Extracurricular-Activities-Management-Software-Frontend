import { AlleSchichtModel } from './alle-schicht-model';

export class DayModel{

    constructor(public name:string, public schichten:[AlleSchichtModel]){
    }
}
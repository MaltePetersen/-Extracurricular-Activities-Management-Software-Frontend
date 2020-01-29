import { VeranstaltungBuchenModel } from './veranstaltungen-buchen-model';

export class ParentDayModel{

    constructor(public name:string, public schichten:[VeranstaltungBuchenModel]){
    }
}
import { SimpleUserDTO } from '../api/models';

export class VeranstaltungBuchenModel {
    
    constructor(public id:number, public name:string, public datum:string, public uhrzeit:string, public day:string, public owner:SimpleUserDTO){
    }
}
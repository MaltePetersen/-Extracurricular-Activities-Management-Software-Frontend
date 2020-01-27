import { SimpleUserDTO } from '../api/models';

export class AlleSchichtModel{
    
    constructor(public id:number, public name:string, public schule:string, public datum:string, public uhrzeit:string, public day:string, public owner:SimpleUserDTO){
    }
}
import { SimpleUserDTO } from '../api/models';

export class AlleSchichtModel{
    
    constructor(public id, public schule:string, public datum:string, public uhrzeit:string, public day:string, public owner:SimpleUserDTO){
    }
}
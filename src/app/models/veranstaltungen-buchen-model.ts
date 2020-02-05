import { SimpleUserDTO } from '../api/models';

export class VeranstaltungBuchenModel {
    
    constructor(public id:number, public name:string, public startTime:any, public endTime:any, public day:string, public owner:SimpleUserDTO){
    }
}
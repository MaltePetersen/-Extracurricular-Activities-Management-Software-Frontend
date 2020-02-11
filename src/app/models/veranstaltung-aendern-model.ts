import { SimpleUserDTO } from '../api/models';

export class VeranstaltungAendernModel {
    
    constructor(public id:number, public name:string, public startTime:any, public endTime:any, public latestArrivalTime:string, public predefinedLeaveTime:string, public allowedToLeaveAfterFinishedHomework:boolean, public note:string, public childName:string, public username:string, public status:number){
    }
}
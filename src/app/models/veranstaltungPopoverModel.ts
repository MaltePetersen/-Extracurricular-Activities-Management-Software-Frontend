export class VeranstaltungPopoverModel{

    constructor(public careId:number, public startTime:string, public endTime:string, public latestArrivalTime:string, public predefinedLeaveTime:string, public allowedToLeaveAfterFinishedHomework:boolean, public note:string, public username:string){

    }
}
export class PupilModel {

    /*Anwesenheit
    1 = Angemeldet
    2 = überfällig
    3 = Anwesend
    4 = Nach Hause gegangen
    */
    constructor(public id:number, public name:string, public school:string, public schoolClass:string, public note:string, public status:number, public latestArrivalTime:string, public predefinedLeaveTime:string, public allowedToLeaveAfterFinishedHomework:boolean){
    }
}
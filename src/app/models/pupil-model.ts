export class PupilModel {

    /*Anwesenheit
    0 = Angemeldet
    1 = noch nicht anwesend
    2 = gegangen
    3 = ueberfaellig
    */
    constructor(public id:number, public name:string, public school:string, public schoolClass:string, public note:string, public status:number){
        
    }
}
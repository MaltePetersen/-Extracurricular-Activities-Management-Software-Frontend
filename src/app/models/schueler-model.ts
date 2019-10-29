export class SchuelerModel{

    /*Anwesenheit
    0 = Angemeldet
    1 = noch nicht anwesend
    2 = gegangen
    3 = ueberfaellig
    */
    constructor(public name:string, public schule:string, public klasse:string, public betreuungsende:any, public info:string, public anwesenheit:number){
        
    }
}
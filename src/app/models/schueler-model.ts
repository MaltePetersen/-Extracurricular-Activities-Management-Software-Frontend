export class SchuelerModel{

    constructor(public name:String, public schule:String, public klasse:String, public betreuungsende:any, public info:String, public anwesenheit:String){
        
    }

    getColor(){
        if(this.anwesenheit == "angemeldet"){
            return "blue";
        }
        if(this.anwesenheit == "nichtAnwesend"){
            return "grey";
        }
        if(this.anwesenheit == "gegangen"){
            return "black";
        }
    }
}
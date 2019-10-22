export class SchichtModel{

    public day:any;
    
    constructor(public schule:String, public datum:String, public uhrzeit:String){
        let currentDate = new Date();
        let weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
        this.day = weekdays[currentDate.getDay()];
    }
}
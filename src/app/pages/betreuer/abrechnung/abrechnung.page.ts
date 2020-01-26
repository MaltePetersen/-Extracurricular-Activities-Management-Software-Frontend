import { Component, OnInit } from '@angular/core';
import { SchichtModel } from 'src/app/models/schicht-model';
import Moment from "moment"; 
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment as any);

@Component({
  selector: 'app-abrechnung',
  templateUrl: './abrechnung.page.html',
  styleUrls: ['./abrechnung.page.scss'],
})
export class AbrechnungPage implements OnInit {

  schichten:any;

  datum:any = moment().locale('de').format('DD.MM.YYYY');
  datePickerDefaultSettings:any = {
    setLabel: 'Auswählen',
    todayLabel: 'Heute',
    closeLabel: 'Abbrechen',
    titleLabel: 'Wähle ein Datum',
    monthsList: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sept", "Okt", "Nov", "Dez"],
    weeksList: ["S", "M", "D", "M", "D", "F", "S"],
    dateFormat: 'DD.MM.YYYY',
    clearButton : false,
    momentLocale: 'de'
  };
  
  constructor() {
  }

  ngOnInit() {
    this.schichten = [
      new SchichtModel("1", "Klaus Groth Schule", "17.10.2019", "10:00", "Donnerstag")
    ]
  }

  dateChange(){
    let selectedDate = moment(this.datum,('DD.MM.YYYY'));
    let start = moment(selectedDate).startOf('month');
    let end = moment(selectedDate).endOf('month');
    let range = moment.range(start, end);
    let dateArray = Array.from(range.by('days')).map(m => m.format('DD.MM.YYYY'));
    console.table(dateArray);
  }

}

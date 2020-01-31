import { PopoverController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import moment from 'moment';


@Component({
  selector: 'app-veranstaltungs-popover',
  templateUrl: './veranstaltungs-popover.page.html',
  styleUrls: ['./veranstaltungs-popover.page.scss'],
})
export class VeranstaltungsPopoverPage implements OnInit {
  @Input("endzeit") endzeit;
  //endzeit = null;
  bemerkung;
  endzeit2= null;
  datum = null;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async closePopover(){
    console.log("endzeit2: "+this.endzeit2)
    if (this.endzeit2 !== null){
    let newDate = this.endzeit.split("T");
    this.datum = (`${newDate[0]}T${this.endzeit2}:00`);
    } else { this.datum = this.endzeit;
    }
    console.log("endzeit2: "+this.endzeit2)
    console.log("Datum : "+this.datum)
    const endzeit: string = this.datum;
    const bemerkung: string = this.bemerkung;
    console.log("Endzeit Popover" + endzeit)
    await this.popoverController.dismiss(endzeit, bemerkung);
  }

  // Hier muss ich die Werte noch Null setzen von Endzeit und Bemerkung!!!
  async abort(){
    await this.popoverController.dismiss(null, null);
}
}

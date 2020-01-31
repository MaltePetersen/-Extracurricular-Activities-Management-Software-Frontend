import { PopoverController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import moment from 'moment';


@Component({
  selector: 'app-veranstaltungs-popover',
  templateUrl: './veranstaltungs-popover.page.html',
  styleUrls: ['./veranstaltungs-popover.page.scss'],
})
export class VeranstaltungsPopoverPage implements OnInit {
  //TODO: Muss endweder Teil von SharedModule oder von dem relevanten PageModul.
  @Input("endzeit") endzeit;
  //endzeit = null;
  bemerkung;
  endzeit2;
  datum = null;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    
    this.endzeit2 = this.endzeit;
  }

  async closePopover(){
    let newDate = this.endzeit.split("T");
    this.datum = (`${newDate[1]}T${this.endzeit2}:00`);
    const bemerkung: string = this.bemerkung;
    const endzeit: string = this.datum;
    await this.popoverController.dismiss(endzeit, bemerkung);
  }

  // Hier muss ich die Werte noch Null setzen von Endzeit und Bemerkung!!!
  async abort(){
    await this.popoverController.dismiss(null, null);
}
}

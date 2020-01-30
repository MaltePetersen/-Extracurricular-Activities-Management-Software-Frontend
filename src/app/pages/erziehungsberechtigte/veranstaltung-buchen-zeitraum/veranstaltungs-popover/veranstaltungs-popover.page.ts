import { PopoverController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';


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

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    
    this.endzeit2 = this.endzeit;
  }

  async closePopover(){
    console.log("ENDZEIT NEU = " +this.endzeit2)
    const bemerkung: string = this.bemerkung;
    const endzeit: string = this.endzeit2;
    await this.popoverController.dismiss(endzeit, bemerkung);
  }

  // Hier muss ich die Werte noch Null setzen von Endzeit und Bemerkung!!!
  async abort(){
    await this.popoverController.dismiss(null, null);
}
}

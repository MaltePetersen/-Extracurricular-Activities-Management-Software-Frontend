import { PopoverController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-veranstaltungs-popover',
  templateUrl: './veranstaltungs-popover.page.html',
  styleUrls: ['./veranstaltungs-popover.page.scss'],
})
export class VeranstaltungsPopoverPage implements OnInit {
  @Input("endzeit") endzeit;
  //endzeit = null;
  bemerkung = null;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    
    //this.endzeit = endzeit;
  }

  async closePopover(){
    const bemerkung: string = this.bemerkung;
    const endzeit: string = this.endzeit;
    await this.popoverController.dismiss(endzeit, bemerkung);
  }
  
}

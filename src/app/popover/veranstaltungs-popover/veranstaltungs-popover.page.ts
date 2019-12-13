import { NavParams, PopoverController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-veranstaltungs-popover',
  templateUrl: './veranstaltungs-popover.page.html',
  styleUrls: ['./veranstaltungs-popover.page.scss'],
})
export class VeranstaltungsPopoverPage implements OnInit {
  endzeit = null;
  bemerkung = null;

  constructor(private navParams: NavParams, private popoverController: PopoverController) { }

  ngOnInit() {
    console.table(this.navParams);
    this.endzeit = this.navParams.data.endzeit;
  }

  async closePopover(){
    const bemerkung: string = this.bemerkung;
    const endzeit: string = this.endzeit;
    await this.popoverController.dismiss(endzeit, bemerkung);
  }
  
}

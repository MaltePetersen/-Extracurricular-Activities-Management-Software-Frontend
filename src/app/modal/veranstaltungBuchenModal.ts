import { Component, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'veranstaltungBuchenModal-page',
})
export class VeranstaltungBuchenModal {
    @Input() endZeit: string;

  constructor(navParams: NavParams, private modalCtrl:ModalController) {
    console.log(navParams.get('endZeit: '+ this.endZeit));
    console.log(navParams.get('endZeit'));
  }

  async dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    await this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
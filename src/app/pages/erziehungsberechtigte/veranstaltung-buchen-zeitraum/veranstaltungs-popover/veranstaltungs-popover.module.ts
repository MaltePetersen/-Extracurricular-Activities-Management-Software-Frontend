import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VeranstaltungsPopoverPage } from './veranstaltungs-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  entryComponents: [VeranstaltungsPopoverPage],
  declarations: [VeranstaltungsPopoverPage]
})
export class VeranstaltungsPopoverPageModule {}

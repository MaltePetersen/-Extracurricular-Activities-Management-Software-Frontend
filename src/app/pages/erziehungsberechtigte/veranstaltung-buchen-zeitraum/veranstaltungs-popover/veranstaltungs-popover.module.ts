import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';

import { IonicModule } from '@ionic/angular';

import { VeranstaltungsPopoverPage } from './veranstaltungs-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentModule
  ],
  entryComponents: [VeranstaltungsPopoverPage],
  declarations: [VeranstaltungsPopoverPage]
})
export class VeranstaltungsPopoverPageModule {}

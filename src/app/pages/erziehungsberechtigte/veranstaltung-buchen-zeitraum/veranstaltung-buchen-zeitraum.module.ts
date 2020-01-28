import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

import { VeranstaltungBuchenZeitraumPage } from './veranstaltung-buchen-zeitraum.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MomentModule } from 'ngx-moment';
import { VeranstaltungsPopoverPageModule } from './veranstaltungs-popover/veranstaltungs-popover.module';

const routes: Routes = [
  {
    path: '',
    component: VeranstaltungBuchenZeitraumPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VeranstaltungsPopoverPageModule,
    SharedModule,
    IonicModule,
    MomentModule,
    Ionic4DatepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VeranstaltungBuchenZeitraumPage]
})
export class VeranstaltungBuchenZeitraumPageModule {}

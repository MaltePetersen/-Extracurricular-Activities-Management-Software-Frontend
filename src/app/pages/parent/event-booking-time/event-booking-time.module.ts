import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

import { EventBookingTimePage } from './event-booking-time.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MomentModule } from 'ngx-moment';
import { EventPopoverPageModule } from './event-popover/event-popover.module';

const routes: Routes = [
  {
    path: '',
    component: EventBookingTimePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EventPopoverPageModule,
    SharedModule,
    IonicModule,
    MomentModule,
    Ionic4DatepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventBookingTimePage]
})
export class EventBookingTimePageModule {}

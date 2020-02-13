import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventBookingPage } from './event-booking.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MomentModule } from 'ngx-moment';

const routes: Routes = [
  {
    path: '',
    component: EventBookingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventBookingPage]
})
export class EventBookingPageModule {}

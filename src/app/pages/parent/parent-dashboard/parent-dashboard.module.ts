import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParentDashboardPage } from './parent-dashboard.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';
import { MomentModule } from 'ngx-moment';
import { EventPopoverPageModule } from '../event-booking-time/event-popover/event-popover.module';

const routes: Routes = [
  {
    path: '',
    component: ParentDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    MomentModule,
    EventPopoverPageModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
  ],
  declarations: [ParentDashboardPage]
})
export class ParentDashboardPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AttendanceListPage } from './attendance-list.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';
import { AttendancePopoverModule } from './attendance-popover/attendance-popover.module';
import { MomentModule } from 'ngx-moment';

const routes: Routes = [
  {
    path: '',
    component: AttendanceListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AttendancePopoverModule,
    RouterModule.forChild(routes),
    MomentModule
  ],
  declarations: [AttendanceListPage],
  entryComponents: []
})
export class AttendanceListPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BetreuerDashboardPage } from './betreuer-dashboard.page';
/*import { NgxDatatableModule } from '@swimlane/ngx-datatable';*/

const routes: Routes = [
  {
    path: '',
    component: BetreuerDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BetreuerDashboardPage]
})
export class BetreuerDashboardPageModule {}

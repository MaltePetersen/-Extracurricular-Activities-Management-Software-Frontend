import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ErziehungsberechtigteDashboardPage } from './erziehungsberechtigte-dashboard.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';
import { MomentModule } from 'ngx-moment';

const routes: Routes = [
  {
    path: '',
    component: ErziehungsberechtigteDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    MomentModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
  ],
  declarations: [ErziehungsberechtigteDashboardPage]
})
export class ErziehungsberechtigteDashboardPageModule { }

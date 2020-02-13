import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvoicePage } from './invoice.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { MomentModule } from 'ngx-moment';

const routes: Routes = [
  {
    path: '',
    component: InvoicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MomentModule,
    Ionic4DatepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvoicePage]
})
export class InvoicePageModule {}

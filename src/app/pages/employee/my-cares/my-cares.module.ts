import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyCaresPage } from './my-cares.page';
import { SharedModule } from 'src/app/shared/shared.module';

import { MomentModule } from 'ngx-moment';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

const routes: Routes = [
  {
    path: '',
    component: MyCaresPage
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
    RouterModule.forChild(routes),
  ],
  declarations: [MyCaresPage]
})
export class MyCaresPageModule {}

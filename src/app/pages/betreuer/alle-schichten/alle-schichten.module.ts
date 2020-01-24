import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlleSchichtenPage } from './alle-schichten.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatePickerModule } from 'ionic4-date-picker';
import { MomentModule } from 'ngx-moment';

const routes: Routes = [
  {
    path: '',
    component: AlleSchichtenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MomentModule,
    DatePickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlleSchichtenPage]
})
export class AlleSchichtenPageModule {}

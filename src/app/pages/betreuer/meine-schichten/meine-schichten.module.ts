import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MeineSchichtenPage } from './meine-schichten.page';

const routes: Routes = [
  {
    path: '',
    component: MeineSchichtenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MeineSchichtenPage]
})
export class MeineSchichtenPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VeranstaltungEinsehenPage } from './veranstaltung-einsehen.page';

const routes: Routes = [
  {
    path: '',
    component: VeranstaltungEinsehenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VeranstaltungEinsehenPage]
})
export class VeranstaltungEinsehenPageModule {}

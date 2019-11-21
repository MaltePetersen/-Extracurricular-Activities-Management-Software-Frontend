import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VeranstaltungBuchenZeitraumPage } from './veranstaltung-buchen-zeitraum.page';

const routes: Routes = [
  {
    path: '',
    component: VeranstaltungBuchenZeitraumPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VeranstaltungBuchenZeitraumPage]
})
export class VeranstaltungBuchenZeitraumPageModule {}

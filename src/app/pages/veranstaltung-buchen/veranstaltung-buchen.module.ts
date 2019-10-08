import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VeranstaltungBuchenPage } from './veranstaltung-buchen.page';

const routes: Routes = [
  {
    path: '',
    component: VeranstaltungBuchenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VeranstaltungBuchenPage]
})
export class VeranstaltungBuchenPageModule {}

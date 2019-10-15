import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchuelerAnmeldenPage } from './schueler-anmelden.page';

const routes: Routes = [
  {
    path: '',
    component: SchuelerAnmeldenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchuelerAnmeldenPage]
})
export class SchuelerAnmeldenPageModule {}

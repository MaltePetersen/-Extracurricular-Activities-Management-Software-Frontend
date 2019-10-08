import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KindHinzufuegenPage } from './kind-hinzufuegen.page';

const routes: Routes = [
  {
    path: '',
    component: KindHinzufuegenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KindHinzufuegenPage]
})
export class KindHinzufuegenPageModule {}

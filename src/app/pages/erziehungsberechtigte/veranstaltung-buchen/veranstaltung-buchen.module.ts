import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VeranstaltungBuchenPage } from './veranstaltung-buchen.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MomentModule } from 'ngx-moment';

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
    MomentModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VeranstaltungBuchenPage]
})
export class VeranstaltungBuchenPageModule {}

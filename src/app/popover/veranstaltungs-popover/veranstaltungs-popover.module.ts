import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VeranstaltungsPopoverPage } from './veranstaltungs-popover.page';

const routes: Routes = [
  {
    path: '',
    component: VeranstaltungsPopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VeranstaltungsPopoverPage],
  entryComponents:[VeranstaltungsPopoverPage]
})
export class VeranstaltungsPopoverPageModule {}

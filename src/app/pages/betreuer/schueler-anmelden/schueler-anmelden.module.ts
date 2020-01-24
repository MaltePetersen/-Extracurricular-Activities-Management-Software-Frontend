import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchuelerAnmeldenPage } from './schueler-anmelden.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnwesenheitPopoverComponent } from './anwesenheit-popover/anwesenheit-popover.component';
import { AnwesenheitsPopoverModule } from './anwesenheit-popover/anwesenheit-popover.module';
import { MomentModule } from 'ngx-moment';

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
    SharedModule,
    AnwesenheitsPopoverModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    MomentModule
  ],
  declarations: [SchuelerAnmeldenPage],
  entryComponents: []
})
export class SchuelerAnmeldenPageModule {}

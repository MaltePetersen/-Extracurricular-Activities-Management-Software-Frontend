import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleComponent } from './example.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent
  }
];
@NgModule({
  imports: [ CommonModule, FormsModule,IonicModule,    RouterModule.forChild(routes)
  ],
  declarations: [ExampleComponent],
  exports: [ExampleComponent]
})
export class ExampleComponentModule {}

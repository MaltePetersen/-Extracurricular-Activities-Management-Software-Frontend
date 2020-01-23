import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestComponent } from './test.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: TestComponent
  }
];

@NgModule({
  imports: [ CommonModule, FormsModule,IonicModule, RouterModule.forChild(routes)],
  declarations: [TestComponent],
  exports: [TestComponent]
})
export class TestComponentModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component';


const routes: Routes = [
  {
    path: 'test',
    loadChildren: () => import('./example/example.module').then(m => m.ExampleComponentModule)
  },
  {
    path: 'sec',
    loadChildren: () => import('./example/example.module').then(m => m.ExampleComponentModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }

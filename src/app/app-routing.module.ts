import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'schulauswahl',
    loadChildren: () => import('./pages/betreuer/schulauswahl/schulauswahl.module').then(m => m.SchulauswahlPageModule)
  },
  { 
    path: 'schueler-anmelden', 
    loadChildren: () => import('./pages/betreuer/schueler-anmelden/schueler-anmelden.module').then(m => m.SchuelerAnmeldenPageModule) 
  },
  { 
    path: 'meine-schichten',
    loadChildren: () => import('./pages/betreuer/meine-schichten/meine-schichten.module').then(m=> m.MeineSchichtenPageModule)
  },
  { 
    path: 'alle-schichten',
    loadChildren: () => import('./pages/betreuer/alle-schichten/alle-schichten.module').then(m=>m.AlleSchichtenPageModule)
  },
  { 
    path: 'abrechnung',
    loadChildren: () => import('./pages/betreuer/abrechnung/abrechnung.module').then(m=>m.AbrechnungPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

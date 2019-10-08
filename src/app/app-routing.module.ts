import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'registrierung',
    loadChildren: './pages/registrierung/registrierung.module#RegistrierungPageModule'
  },
  {
    path: 'fjoerde-leitung-dashboard',
    loadChildren:
      './pages/fjoerdeLeitung/fjoerde-leitung-dashboard/fjoerde-leitung-dashboard.module#FjoerdeLeitungDashboardPageModule',
      //Activates the Guard for the Routing. Only Object with the in data specified role can route to this child.
      canActivate: [AuthGuard],
      data: {
        role: 'LEITUNG'
      }
  },
  {
    path: 'betreuer-dashboard',
    loadChildren:
      './pages/betreuer/betreuer-dashboard/betreuer-dashboard.module#BetreuerDashboardPageModule',
      canActivate: [AuthGuard],
      data: {
        role: 'BETREUER'
      }
  },
  {
    path: 'erziehungsberechtigte-dashboard',
    loadChildren:
      // tslint:disable-next-line: max-line-length
      './pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.module#ErziehungsberechtigteDashboardPageModule',
      canActivate: [AuthGuard],
      data: {
        role: 'ERZIEHUNGSBERECHTIGTE'
      }
  },
  { path: 'registrierung', loadChildren: './pages/registrierung/registrierung.module#RegistrierungPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: 'erziehungsberechtigte-dashboard',
    loadChildren: () => 
    import('./erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.module')
    .then(m => m.ErziehungsberechtigteDashboardPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'veranstaltung-buchen',
    loadChildren: () => import('./veranstaltung-buchen/veranstaltung-buchen.module').then(m => m.VeranstaltungBuchenPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'kind-hinzufuegen',
    loadChildren: () => import(  './kind-hinzufuegen/kind-hinzufuegen.module')
    .then(m => m.KindHinzufuegenPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  }, 
  {
    path: 'kind-uebersicht', loadChildren: () => import('./kind-uebersicht/kind-uebersicht.module').then(m => m.KindUebersichtPageModule), 
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'kind-bearbeiten', 
    loadChildren: () => import('./kind-bearbeiten/kind-bearbeiten.module').then(m => m.KindBearbeitenPageModule), 
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'veranstaltung-buchen-zeitraum', 
    loadChildren: ()=> import('./veranstaltung-buchen-zeitraum/veranstaltung-buchen-zeitraum.module').then(m => m.VeranstaltungBuchenZeitraumPageModule),
     canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }

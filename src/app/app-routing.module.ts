import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //TODO: Erstellen von einem Routing Module per Role und zwei übergeordneten Modulen
  //{ path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'registrierung',
    loadChildren: './pages/erziehungsberechtigte/registrierung/registrierung.module#RegistrierungPageModule'
  },
  {
    path: 'erziehungsberechtigte-dashboard',
    loadChildren:
      // tslint:disable-next-line: max-line-length
      './pages/erziehungsberechtigte/erziehungsberechtigte-dashboard/erziehungsberechtigte-dashboard.module#ErziehungsberechtigteDashboardPageModule',
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'veranstaltung-buchen',
    loadChildren:
      './pages/erziehungsberechtigte/veranstaltung-buchen/veranstaltung-buchen.module#VeranstaltungBuchenPageModule',
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  // {
  //   path: 'veranstaltung-einsehen',
  //   loadChildren:
  //     './pages/erziehungsberechtigte/veranstaltung-einsehen/veranstaltung-einsehen.module#VeranstaltungEinsehenPageModule',
  //   canActivate: [AuthGuard],
  //   data: {
  //     role: 'ROLE_PARENT'
  //   }
  // },
  {
    path: 'kind-hinzufuegen',
    loadChildren:
      './pages/erziehungsberechtigte/kind-hinzufuegen/kind-hinzufuegen.module#KindHinzufuegenPageModule',
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'account',
    loadChildren:
      './pages/erziehungsberechtigte/account/account.module#AccountPageModule',
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'schulauswahl',
    loadChildren: () => import('./pages/betreuer/schulauswahl/schulauswahl.module').then(m => m.SchulauswahlPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'schueler-anmelden',
    loadChildren: () => import('./pages/betreuer/schueler-anmelden/schueler-anmelden.module').then(m => m.SchuelerAnmeldenPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'meine-schichten',
    loadChildren: () => import('./pages/betreuer/meine-schichten/meine-schichten.module').then(m => m.MeineSchichtenPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'alle-schichten',
    loadChildren: () => import('./pages/betreuer/alle-schichten/alle-schichten.module').then(m => m.AlleSchichtenPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'abrechnung',
    loadChildren: () => import('./pages/betreuer/abrechnung/abrechnung.module').then(m => m.AbrechnungPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'logout', loadChildren: './pages/logout/logout.module#LogoutPageModule',
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'kind-uebersicht', loadChildren: './pages/erziehungsberechtigte/kind-uebersicht/kind-uebersicht.module#KindUebersichtPageModule', canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'kind-bearbeiten', loadChildren: './pages/erziehungsberechtigte/kind-bearbeiten/kind-bearbeiten.module#KindBearbeitenPageModule', canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  { path: 'veranstaltung-buchen-zeitraum', loadChildren: './pages/erziehungsberechtigte/veranstaltung-buchen-zeitraum/veranstaltung-buchen-zeitraum.module#VeranstaltungBuchenZeitraumPageModule', canActivate: [AuthGuard],
  data: {
    role: 'ROLE_PARENT'
  }
},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

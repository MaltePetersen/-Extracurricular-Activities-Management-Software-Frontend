import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path:'', loadChildren: () => import('./test/test.module').then(m=>m.TestComponentModule)
  },
  {
    path: 'schulauswahl',
    loadChildren: () => import('./schulauswahl/schulauswahl.module').then(m => m.SchulauswahlPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'schueler-anmelden',
   // loadChildren: () => import('./schueler-anmelden/schueler-anmelden.module').then(m => m.SchuelerAnmeldenPageModule),
   loadChildren: () => import('./schueler-anmelden/schueler-anmelden.module').then(m => m.SchuelerAnmeldenPageModule),
 
   canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'meine-schichten',
    loadChildren: () => import('./meine-schichten/meine-schichten.module').then(m => m.MeineSchichtenPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'alle-schichten',
    loadChildren: () => import('./alle-schichten/alle-schichten.module').then(m => m.AlleSchichtenPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'abrechnung',
    loadChildren: () => import('./abrechnung/abrechnung.module').then(m => m.AbrechnungPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

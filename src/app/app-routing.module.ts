import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'NULL'
    }
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/parent/register/register.module')
    .then(m => m.RegisterPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'NULL'
    }
  },
  {
    path: 'editAccount',
    loadChildren: () => import('./pages/account/edit-account/edit-account.module')
    .then(m => m.EditAccountPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE || ROLE_PARENT'
    }
  },
{ path: 'employee', 
  loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule),
  canActivate: [AuthGuard],
  data: {
    role: 'ROLE_EMPLOYEE'
  }
},
{ path: 'parent', 
loadChildren: () => import('./pages/parent/parent.module').then(m => m.ParentModule),
canActivate: [AuthGuard],
data: {
  role: 'ROLE_PARENT'
}},
  { path: 'edit-account', loadChildren: './pages/account/edit-account/edit-account.module#EditAccountPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

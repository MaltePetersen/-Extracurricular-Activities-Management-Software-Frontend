import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: 'school-selection',
    loadChildren: () => import('./school-selection/school-selection.module').then(m => m.SchoolSelectionPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'attendance-list',
   loadChildren: () => import('./attendance-list/attendance-list.module').then(m => m.AttendanceListPageModule),
 
   canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'my-cares',
    loadChildren: () => import('./my-cares/my-cares.module').then(m => m.MyCaresPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'all-cares',
    loadChildren: () => import('./all-cares/all-cares.module').then(m => m.AllCaresPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoicePageModule),
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

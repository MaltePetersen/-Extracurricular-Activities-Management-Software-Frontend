import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: 'parent-dashboard',
    loadChildren: () => 
    import('./parent-dashboard/parent-dashboard.module')
    .then(m => m.ParentDashboardPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'event-booking',
    loadChildren: () => import('./event-booking/event-booking.module').then(m => m.EventBookingPageModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'kind-hinzufuegen',
    loadChildren: () => import(  './child-add/child-add.module')
    .then(m => m.ChildAddPageModule),
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
    path: 'child-overview', loadChildren: () => import('./child-overview/child-overview.module').then(m => m.ChildOverviewPageModule), 
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'child-change', 
    loadChildren: () => import('./child-change/child-change.module').then(m => m.ChildChangePageModule), 
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_PARENT'
    }
  },
  {
    path: 'event-booking-time', 
    loadChildren: ()=> import('./event-booking-time/event-booking-time.module').then(m => m.EventBookingTimePageModule),
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

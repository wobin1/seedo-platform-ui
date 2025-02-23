import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./views/landing-page-layout/landing-page-layout.module').then((m)=> m.LandingPageLayoutModule)
  },
  {
    path: '',
    loadChildren: () => import('./views/app-layout/app-layout.module').then((m)=> m.AppLayoutModule)
  },
  {
    path: '',
    loadChildren: () => import('./views/auth-layout/auth-layout.module').then((m)=> m.AuthLayoutModule)
  },
  {
    path:'',
    loadChildren: () => import('./views/admin/admin.module').then((m)=> m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

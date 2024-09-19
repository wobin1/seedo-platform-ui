import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageLayoutComponent } from './landing-page-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: LandingPageLayoutComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageLayoutRoutingModule { }

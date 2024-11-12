import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageLayoutRoutingModule } from './landing-page-layout-routing.module';
import { LandingPageLayoutComponent } from './landing-page-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { PrimengModule } from '../../primeng/primeng.module';


@NgModule({
  declarations: [
    LandingPageLayoutComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    LandingPageLayoutRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class LandingPageLayoutModule { }

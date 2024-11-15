import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './component/menu/menu.component';
import { HeroComponent } from './component/hero/hero.component';
import { OurserviceComponent } from './component/ourservice/ourservice.component';
import { FooterComponent } from './component/footer/footer.component';
import { ImageCardComponent } from './component/image-card/image-card.component';
import { AboutHeroComponent } from './component/about-hero/about-hero.component';
import { SearchUploadHeaderComponent } from './component/search-upload-header/search-upload-header.component';
import { PrimengModule } from '../primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuComponent,
    HeroComponent,
    OurserviceComponent,
    FooterComponent,
    ImageCardComponent,
    SearchUploadHeaderComponent,
    AboutHeroComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MenuComponent,
    HeroComponent,
    OurserviceComponent,
    FooterComponent,
    ImageCardComponent,
    SearchUploadHeaderComponent,
    AboutHeroComponent,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

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
import { CourseCardComponent } from './component/course-card/course-card.component';
import { EmptyComponent } from './empty/empty.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogCardComponent } from './component/blog-card/blog-card.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { LoaderComponent } from './component/loader/loader.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeroComponent,
    OurserviceComponent,
    FooterComponent,
    ImageCardComponent,
    SearchUploadHeaderComponent,
    AboutHeroComponent,
    CourseCardComponent,
    EmptyComponent,
    ComingSoonComponent,
    ProfileComponent,
    BlogCardComponent,
    EmptyComponent,
    ProductCardComponent,
    ProductDetailComponent,
    LoaderComponent,
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
    ReactiveFormsModule,
    CourseCardComponent,
    EmptyComponent,
    ComingSoonComponent,
    BlogCardComponent,
    EmptyComponent,
    ProductCardComponent,
    ProductDetailComponent,
    LoaderComponent

  ]
})
export class SharedModule { }

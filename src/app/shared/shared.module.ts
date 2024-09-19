import { SearchUploadHeaderComponent } from './../../../../../angular-projects/civet-ui/src/app/shared/search-upload-header/search-upload-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './component/menu/menu.component';
import { HeroComponent } from './component/hero/hero.component';
import { OurserviceComponent } from './component/ourservice/ourservice.component';
import { FooterComponent } from './component/footer/footer.component';
import { ImageCardComponent } from './component/image-card/image-card.component';



@NgModule({
  declarations: [
    MenuComponent,
    HeroComponent,
    OurserviceComponent,
    FooterComponent,
    ImageCardComponent,
    SearchUploadHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    HeroComponent,
    OurserviceComponent,
    FooterComponent,
    ImageCardComponent,
    SearchUploadHeaderComponent
  ]
})
export class SharedModule { }

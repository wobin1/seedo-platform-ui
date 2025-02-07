import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { StyleClassModule } from 'primeng/styleclass';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';




const primeNG: any = [
  ButtonModule,
  ProgressBarModule,
  ToastModule,
  StyleClassModule,
  GalleriaModule,
  ImageModule,
  MenubarModule,
  AvatarModule,
  BadgeModule,
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
   primeNG
  ]
})
export class PrimengModule { }

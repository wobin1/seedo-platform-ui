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
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { SidebarModule } from 'primeng/sidebar';


import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { EditorModule } from 'primeng/editor';




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
  BreadcrumbModule,
  AccordionModule,
  DialogModule,
  MultiSelectModule,
  SidebarModule,
  TableModule,
  RippleModule,
  ToolbarModule,
  ConfirmDialogModule,
  InputTextModule,
  InputTextareaModule,
  FileUploadModule,
  DropdownModule,
  TagModule,
  RadioButtonModule,
  RatingModule,
  FormsModule,
  InputNumberModule,
  IconFieldModule,
  InputIconModule,
  EditorModule
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

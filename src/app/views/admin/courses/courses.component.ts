import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CourseService } from '../../../shared/services/course.service';


interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  providers: [MessageService, ConfirmationService],

})
export class CoursesComponent {
  productDialog: boolean = false;
  isCreateCourse:boolean = false;
      products!: any[];
      loading:boolean = false;
      courses!: any;
      course:any
      videoFile:any;
      selectedProducts!: any | null;

      submitted: boolean = false;

      statuses!: any[];

      constructor( private messageService: MessageService,
                    private confirmationService: ConfirmationService,
                    private courseService: CourseService) {}

      ngOnInit() {
        this.loading = true;
          this.courseService.getCourses().subscribe(
            res =>{
              this.courses = res;
              console.log('courses', this.courses);
              this.loading = false;
            }, err=>{
              console.log(err);
              this.loading = false;

            }
          )

          this.statuses = [
              { label: 'INSTOCK', value: 'instock' },
              { label: 'LOWSTOCK', value: 'lowstock' },
              { label: 'OUTOFSTOCK', value: 'outofstock' }
          ];
      }

      openNew() {
          this.courses = {};
          this.submitted = false;
          this.productDialog = true;
      }

      deleteSelectedProducts() {
          this.confirmationService.confirm({
              message: 'Are you sure you want to delete the selected Coursess?',
              header: 'Confirm Delete',
              icon: 'pi pi-exclamation-triangle',
              accept: () => {
                  this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
                  this.selectedProducts = null;
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
              }
          });
      }

      visible: boolean = false;

      showCreateUserDialog() {
        console.log('showing dialog')
          this.isCreateCourse = true;
      }

      editProduct(course: any) {
          this.course = { ...course };
          this.productDialog = true;
      }

      deleteProduct(product: any) {
          this.confirmationService.confirm({
              message: 'Are you sure you want to delete ' + product.name + '?',
              header: 'Confirm Delete',
              icon: 'pi pi-exclamation-triangle',
              accept: () => {
                  this.products = this.products.filter((val) => val.id !== product.id);
                  this.courses = {};
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
              }
          });
      }

      hideDialog() {
          this.productDialog = false;
          this.submitted = false;
      }

      saveCourse() {
          this.submitted = true;

          if (this.courses.name?.trim()) {
              if (this.courses.id) {
                  this.courses[this.findIndexById(this.courses.id)] = this.courses;
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
              } else {
                  this.courses.id = this.createId();
                  this.courses.image = 'product-placeholder.svg';
                  this.courses.push(this.courses);
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
              }

              this.courses = [...this.courses];
              this.productDialog = false;
              this.courses = {};
          }
      }

      findIndexById(id: string): number {
          let index = -1;
          for (let i = 0; i < this.courses.length; i++) {
              if (this.courses[i].id === id) {
                  index = i;
                  break;
              }
          }

          return index;
      }

      createId(): string {
          let id = '';
          var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          for (var i = 0; i < 5; i++) {
              id += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          return id;
      }

      getSeverity(status: string) {
          switch (status) {
              case 'INSTOCK':
                  return 'success';
              case 'LOWSTOCK':
                  return 'warning';
              case 'OUTOFSTOCK':
                  return 'danger';
              default:
                  return 'warning';
          }
      }


  onImageChange(event:Event){
    let uploadedFile:any = event.target as HTMLInputElement

    // check if uploadedFile exists
    if(uploadedFile && uploadedFile.files[0]){
      this.videoFile = uploadedFile.files[0]
      console.log('File selected successfully', this.videoFile)
    }
  }
}

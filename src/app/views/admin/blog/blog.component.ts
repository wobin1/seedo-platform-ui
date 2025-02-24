import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';


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
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  providers: [MessageService, ConfirmationService],

})
export class BlogComponent {

  productDialog: boolean = false;
    isCreateUser:boolean = false;
      products!: any[];

      product!: any;

      selectedProducts!: any | null;

      submitted: boolean = false;

      statuses!: any[];

      constructor( private messageService: MessageService,
                    private confirmationService: ConfirmationService,
                    private router:Router) {}

      ngOnInit() {
          this.products = [
            {
              id: '1000',
              name: 'Nathaniel Dauda',
              image: 'assets/images/profile.jpg',
              email: 'example@email.com',
            },
            {
              id: '1000',
              name: 'Bamboo Watch',
              image: '/assets/images/profile.jpg',
              email: 'example@email.com',
            },
            {
              id: '1000',
              name: 'Bamboo Watch',
              image: '/assets/images/profile.jpg',
              email: 'example@email.com',
            },
            {
              id: '1000',
              name: 'Bamboo Watch',
              image: '/assets/images/profile.jpg',
              email: 'example@email.com',
            },
            {
              id: '1000',
              name: 'Bamboo Watch',
              image: '/assets/images/profile.jpg',
              email: 'example@email.com',
            },
          ];

          this.statuses = [
              { label: 'INSTOCK', value: 'instock' },
              { label: 'LOWSTOCK', value: 'lowstock' },
              { label: 'OUTOFSTOCK', value: 'outofstock' }
          ];
      }

      route(page:string){
        this.router.navigate([page]);
      }

      openNew() {
          this.product = {};
          this.submitted = false;
          this.productDialog = true;
      }

      deleteSelectedProducts() {
          this.confirmationService.confirm({
              message: 'Are you sure you want to delete the selected products?',
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
          this.isCreateUser = true;
      }

      editProduct(product: any) {
          this.product = { ...product };
          this.productDialog = true;
      }

      deleteProduct(product: any) {
          this.confirmationService.confirm({
              message: 'Are you sure you want to delete ' + product.name + '?',
              header: 'Confirm Delete',
              icon: 'pi pi-exclamation-triangle',
              accept: () => {
                  this.products = this.products.filter((val) => val.id !== product.id);
                  this.product = {};
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
              }
          });
      }

      hideDialog() {
          this.productDialog = false;
          this.submitted = false;
      }

      saveProduct() {
          this.submitted = true;

          if (this.product.name?.trim()) {
              if (this.product.id) {
                  this.products[this.findIndexById(this.product.id)] = this.product;
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
              } else {
                  this.product.id = this.createId();
                  this.product.image = 'product-placeholder.svg';
                  this.products.push(this.product);
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
              }

              this.products = [...this.products];
              this.productDialog = false;
              this.product = {};
          }
      }

      findIndexById(id: string): number {
          let index = -1;
          for (let i = 0; i < this.products.length; i++) {
              if (this.products[i].id === id) {
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

}

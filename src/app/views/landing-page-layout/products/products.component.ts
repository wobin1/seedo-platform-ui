import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  isProductDetail:boolean = false;


  showProductDetail(product:any){
    this.isProductDetail = true;
  }

}

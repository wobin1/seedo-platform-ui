import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  isProductDetail:boolean = false;


  showProductDetail(product:any){
    this.isProductDetail = true;
  }


}

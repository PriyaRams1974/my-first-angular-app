import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    product_name = 'noodles';
    product_qty = 10;
    product_price = 20
  constructor() { }


  IncreaseQty(){
    this.product_qty++;
  }
}

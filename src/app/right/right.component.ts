import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  providers: [ProductsService]

})
export class RightComponent implements OnInit {

  constructor(public prod: ProductsService) { }

  ngOnInit(): void {
  }
  decrease(){
    this.prod.product_qty--;
  }
}

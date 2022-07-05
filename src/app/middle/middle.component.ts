import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
  providers: [ProductsService]
})
export class MiddleComponent implements OnInit {

  constructor(public prod: ProductsService) { }

  ngOnInit(): void {
  }

  increase(){
    this.prod.IncreaseQty();
  }

}

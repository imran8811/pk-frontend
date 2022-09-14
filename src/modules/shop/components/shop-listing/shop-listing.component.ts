import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/models';
import { ProductService } from 'src/services';

import { basePath } from 'src/endpoints';

@Component({
  selector: 'app-shop-listing',
  templateUrl: './shop-listing.component.html',
  styleUrls: ['./shop-listing.component.scss']
})
export class ShopListingComponent implements OnInit {
  category: string = 'men'
  type: string = 'jeans-pant'
  products: IProduct[];
  BASE_PATH = basePath;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsListing()
  }

  getProductsListing = () => {
    const res = this.productService.getAllProducts().subscribe(data => {
      this.products = data
    })
  } 

}

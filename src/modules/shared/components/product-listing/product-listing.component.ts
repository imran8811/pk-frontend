import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/services';
import { IProduct } from 'src/models/product.model';
import { basePath } from 'src/endpoints'

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})

export class ProductListingComponent implements OnInit {
  @Input() category = ''
  @Input() type = ''
  @Input() numberOfRecords = ''
  BASE_ROUTE = basePath

  productListing:IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getTopProducts()  
  }

  getTopProducts = () => {
    this.productService.getTopProducts('men', 'jeans-pant', '6').subscribe(res => {
      this.productListing = res;
    })
  }
}

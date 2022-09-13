import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { basePath } from 'src/endpoints';
import { IProduct } from 'src/models';
import { ProductService } from 'src/services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  BASE_PATH = basePath;
  productDetails: IProduct[];

  constructor(private productService: ProductService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductDetails()
  }

  getProductDetails = () => {
    const res = this.productService.getProductDetails(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.productDetails = data;
    })
  }
}

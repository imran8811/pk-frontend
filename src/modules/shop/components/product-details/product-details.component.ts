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
  productId: string = this.route.snapshot.paramMap.get('id');
  
  constructor(private productService: ProductService, private route : ActivatedRoute) { }
  
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
    this.getProductDetails()
  }

  getProductDetails = () => {
    const res = this.productService.getProductDetails(this.productId).subscribe(data => {
      this.productDetails = data;
    })
  }
}

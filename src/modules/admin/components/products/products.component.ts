import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/models/product.model';

import { ProductService  } from 'src/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class AdminProductsComponent implements OnInit {
  products: IProduct[];

  constructor(private productService: ProductService, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts = () => {
    this.productService.getAllProducts().subscribe(res => {
      this.products = res;  
    });
  }

  deleteProduct = (article_no) => {
    this.productService.deleteProduct(article_no).subscribe(res => {
      if(res.type === 'success'){
        this.toastService.success('product deleted');
      }
    })
  }
  
}

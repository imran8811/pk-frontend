import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-wholesale-denim-jeans-suppliers',
  templateUrl: './wholesale-denim-jeans-suppliers.html',
  styleUrls: ['./wholesale-denim-jeans-suppliers.scss']
})

export class WholesaleDenimJeansSuppliersComponent implements OnInit {
  headingText = 'Jeans Wholesale'
  paraText = 'Best Jeans Wholesale'
  category = 'men'
  type = 'jeans-pant'
  numberOfRecords = '6'

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('About - Wholesale Jeans, Jeans Wholesalers, Wholesale Denim Pants')
    this.meta.addTags([
      {name: 'keywords', content: 'Wholesale Jeans, Jeans Wholesalers, Wholesale Denim Pants'},
      {name: 'description', content: 'PK Apparel Specializes in jeans pants manufacturing and wholesale, jeans Jackets wholesale, Jeans Shirt and all other denim products. We stand behind all of the products that we handle and we are the company that stand behind the quality and performance of the products they build'},
    ])
  }

}
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-kevlar-jeans-manufacturers',
  templateUrl: './kevlar-jeans-manufacturers.component.html',
  styleUrls: ['./kevlar-jeans-manufacturers.component.scss']
})

export class KevlarJeansManufacturersComponent implements OnInit {
  headingText = 'Kevlar Jeans Manufacturers'
  paraText = 'Best Kevlar Jeans Manufacturers'
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
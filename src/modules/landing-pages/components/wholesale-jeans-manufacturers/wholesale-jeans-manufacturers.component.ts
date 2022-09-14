import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wholesale-jeans-manufacturers',
  templateUrl: './wholesale-jeans-manufacturers.component.html',
  styleUrls: ['./wholesale-jeans-manufacturers.component.scss']
})

export class WholesaleJeansManufacturersComponent implements OnInit {
  headingText = 'Wholesale Jeans Manufacturers'
  paraText = 'Best Wholesale Jeans Manufacturers'
  category = 'men'
  type = 'jeans-pant'
  numberOfRecords = '6'

  constructor() { }

  ngOnInit(): void {}

}

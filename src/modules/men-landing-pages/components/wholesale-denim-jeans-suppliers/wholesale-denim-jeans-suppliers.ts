import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wholesale-jeans-bulk',
  templateUrl: './wholesale-jeans-bulk.component.html',
  styleUrls: ['./wholesale-jeans-bulk.component.scss']
})

export class WholesaleJeansBulkComponent implements OnInit {
  headingText = 'Wholesale Jeans Bulk'
  paraText = 'Best Wholesale Jeans Bulk'
  category = 'men'
  type = 'jeans-pant'
  numberOfRecords = '6'

  constructor() { }

  ngOnInit(): void {}

}

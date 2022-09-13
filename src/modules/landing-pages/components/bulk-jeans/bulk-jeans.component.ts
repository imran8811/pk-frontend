import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulk-jeans',
  templateUrl: './bulk-jeans.component.html',
  styleUrls: ['./bulk-jeans.component.scss']
})

export class BulkJeansComponent implements OnInit {
  headingText = 'Bulk Jeans'
  paraText = 'Best Bulk Jeans'  
  category = 'men'  
  type = 'jeans-pant'  
  numberOfRecords = '6' 

  constructor() { }

  ngOnInit(): void {}

}

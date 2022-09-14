import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kevlar-jeans-manufacturers',
  templateUrl: './kevlar-jeans-manufacturers.component.html',
  styleUrls: ['./kevlar-jeans-manufacturers.component.scss']
})

export class KevlarJeansManufacturersComponent implements OnInit {
  headingText = 'Jeans Wholesale'
  paraText = 'Best Jeans Wholesale'
  category = 'men'
  type = 'jeans-pant'
  numberOfRecords = '6'

  constructor() { }

  ngOnInit(): void {}

}

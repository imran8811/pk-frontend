import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeans-manufacturing-cost',
  templateUrl: './jeans-manufacturing-cost.component.html',
  styleUrls: ['./jeans-manufacturing-cost.component.scss']
})

export class JeansManufacturingCostComponent implements OnInit {
  headingText = 'Jean Manufacturers'
  paraText = 'Best Jean Manufacturers'
  category = 'men'  
  type = 'jeans-pant'  
  numberOfRecords = '6' 

  constructor() { }

  ngOnInit(): void {}

}

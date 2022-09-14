import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeans-manufacturers',
  templateUrl: './jeans-manufacturers.component.html',
  styleUrls: ['./jeans-manufacturers.component.scss']
})

export class JeansManufacturersComponent implements OnInit {
  headingText = 'Jeans Manufacturers'
  paraText = 'Best Jeans Manufacturers'
  category = 'men'  
  type = 'jeans-pant'  
  numberOfRecords = '6' 

  constructor() { }

  ngOnInit(): void {}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-denim-manufacturers',
  templateUrl: './denim-manufacturers.component.html',
  styleUrls: ['./denim-manufacturers.component.scss']
})

export class DenimManufacturersComponent implements OnInit {
  headingText = 'Denim Manufacturers'
  paraText = 'Best Denim Manufacturers'
  category = 'men'  
  type = 'jeans-pant'  
  numberOfRecords = '6' 

  constructor() { }

  ngOnInit(): void {}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeans-pants-manufacturers',
  templateUrl: './jeans-pants-manufacturers.component.html',
  styleUrls: ['./jeans-pants-manufacturers.component.scss']
})

export class JeansPantsManufacturersComponent implements OnInit {
  headingText = 'Jeans Pants Manufacturers'
  paraText = 'Best Jeans Pants Manufacturers'
  category = 'men'  
  type = 'jeans-pant'  
  numberOfRecords = '6' 

  constructor() { }

  ngOnInit(): void {}

}

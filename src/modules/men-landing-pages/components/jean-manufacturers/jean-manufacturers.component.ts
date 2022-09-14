import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jean-manufacturers',
  templateUrl: './jean-manufacturers.component.html',
  styleUrls: ['./jean-manufacturers.component.scss']
})

export class JeanManufacturersComponent implements OnInit {
  headingText = 'Jean Manufacturers'
  paraText = 'Best Jean Manufacturers'
  category = 'men'  
  type = 'jeans-pant'  
  numberOfRecords = '6' 

  constructor() { }

  ngOnInit(): void {}

}

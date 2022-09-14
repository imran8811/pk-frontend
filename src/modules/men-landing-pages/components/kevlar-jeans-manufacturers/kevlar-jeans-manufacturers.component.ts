import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kevlar-jeans-manufacturers',
  templateUrl: './kevlar-jeans-manufacturers.component.html',
  styleUrls: ['./kevlar-jeans-manufacturers.component.scss']
})

export class KevlarJeansManufacturersComponent implements OnInit {
  headingText = 'Kevlar Jeans Manufacturers'
  paraText = 'Best Kevlar Jeans Manufacturers'
  category = 'men'
  type = 'jeans-pant'
  numberOfRecords = '6'

  constructor() { }

  ngOnInit(): void {}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeans-wholesale',
  templateUrl: './jeans-wholesale.component.html',
  styleUrls: ['./jeans-wholesale.component.scss']
})

export class JeansWholesaleComponent implements OnInit {
  headingText = 'Jeans Wholesale'
  paraText = 'Best Jeans Wholesale'
  category = 'men'
  type = 'jeans-pant'
  numberOfRecords = '6'

  constructor() { }

  ngOnInit(): void {}

}

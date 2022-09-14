import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wholesale-women-jeans',
  templateUrl: './wholesale-women-jeans.component.html',
  styleUrls: ['./wholesale-women-jeans.component.scss']
})

export class WholesaleWomenJeansComponent implements OnInit {
  headingText = 'Wholesale Women Jeans'
  paraText = 'Best Wholesale Women Jeans'
  category = 'men'
  type = 'jeans-pant'
  numberOfRecords = '6'

  constructor() { }

  ngOnInit(): void {}

}

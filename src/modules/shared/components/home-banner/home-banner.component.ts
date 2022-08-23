import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HomeBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}

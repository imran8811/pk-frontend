import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import {
  HeaderComponent,
  FooterComponent, 
  NavComponent,
  HomeBannerComponent,
  RatingReviewsComponent,
  FAQsComponent,
  KeywordsComponent,
  ProductFiltersComponent
} from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeBannerComponent,
    RatingReviewsComponent,
    FAQsComponent,
    KeywordsComponent,
    ProductFiltersComponent
  ],
  exports :[
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeBannerComponent,
    RatingReviewsComponent,
    FAQsComponent,
    KeywordsComponent,
    ProductFiltersComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule { }

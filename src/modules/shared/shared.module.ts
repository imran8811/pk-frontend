import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import {
  HeaderComponent,
  FooterComponent, 
  NavHeaderComponent,
  NavFooterComponent,
  HomeBannerComponent,
  RatingReviewsComponent,
  FAQsComponent,
  KeywordsComponent,
  ProductFiltersComponent,
  ProductListingComponent,
  TaglineComponent
} from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavHeaderComponent,
    NavFooterComponent,
    HomeBannerComponent,
    RatingReviewsComponent,
    FAQsComponent,
    KeywordsComponent,
    ProductFiltersComponent,
    ProductListingComponent,
    TaglineComponent
  ],
  exports :[
    HeaderComponent,
    FooterComponent,
    NavHeaderComponent,
    NavFooterComponent,
    HomeBannerComponent,
    RatingReviewsComponent,
    FAQsComponent,
    KeywordsComponent,
    ProductFiltersComponent,
    ProductListingComponent,
    TaglineComponent
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

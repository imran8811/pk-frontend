import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { SortByPipe } from 'src/pipes/sortBy.pipe';

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
    TaglineComponent,
    SortByPipe
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
    TaglineComponent,
    SortByPipe
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [
    SortByPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule { }

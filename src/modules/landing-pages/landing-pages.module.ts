import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LandingPagesRoutingModule } from './landing-pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import {
  BulkJeansComponent,
  TaglineComponent,
  ProductListingComponent,
  DenimManufacturersComponent,
  JeanManufacturersComponent
} from './components';

@NgModule({
  declarations: [
    BulkJeansComponent,
    TaglineComponent,
    ProductListingComponent,
    DenimManufacturersComponent,
    JeanManufacturersComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    LandingPagesRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})

export class LandingPagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MenLandingPagesRoutingModule } from './men-landing-pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LANDING_PAGES_COMPONENTS } from './components';

@NgModule({
  declarations: LANDING_PAGES_COMPONENTS,
  imports: [
    RouterModule,
    CommonModule,
    MenLandingPagesRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})

export class MenLandingPagesModule { }

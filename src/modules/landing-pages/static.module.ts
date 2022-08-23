import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './static-routing.module';
import { SharedModule } from '../shared/shared.module';

import {
  HomeComponent,
  AboutComponent,
  FactoryComponent,
  ContactComponent,
  CertificationsComponent,
  BlogComponent
} from './components';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    FactoryComponent,
    ContactComponent,
    CertificationsComponent,
    BlogComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class StaticModule { }

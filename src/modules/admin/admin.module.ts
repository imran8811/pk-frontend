import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RemoveDashPipe } from 'src/pipes/remove-dash';

import {
  AddProductComponent,
  AdminLoginComponent,
  AdminHeaderComponent,
  AdminProductsComponent,
  CreateAdminUserComponent,
  EditProductComponent
} from './components';

@NgModule({
  declarations: [
    AddProductComponent,
    AdminLoginComponent,
    AdminHeaderComponent,
    AdminProductsComponent,
    CreateAdminUserComponent,
    EditProductComponent,
    RemoveDashPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    RemoveDashPipe
  ]
})

export class AdminModule { }

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  AddProductComponent,
  AdminLoginComponent,
  AdminProductsComponent,
  CreateAdminUserComponent,
  EditProductComponent
} from './components';

const routes: Routes = [
  { path: 'login', component: AdminLoginComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product', component: EditProductComponent },
  { path: 'products', component: AdminProductsComponent },
  { path: 'create-admin-user', component: CreateAdminUserComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule {}

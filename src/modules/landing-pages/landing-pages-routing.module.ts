import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  BulkJeansComponent,
  DenimManufacturersComponent,
  JeanManufacturersComponent
} from './components';

const routes: Routes = [
  { path: 'jeans-pants/bulk-jeans', component: BulkJeansComponent },
  { path: 'jeans-pants/denim-manufacturers', component: DenimManufacturersComponent },
  { path: 'jeans-pants/jean-manufacturers', component: JeanManufacturersComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LandingPagesRoutingModule {}

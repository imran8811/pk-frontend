import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  BulkJeansComponent,
  DenimManufacturersComponent,
  JeanManufacturersComponent,
  JeansManufacturersComponent,
  JeansManufacturingCostComponent,
  JeansPantsManufacturersComponent,
  JeansWholesaleComponent,
  KevlarJeansManufacturersComponent,
  WholesaleDenimJeansSuppliersComponent,
  WholesaleJeansManufacturersComponent,
  WholesaleJeansBulkComponent
} from './components';

const routes: Routes = [
  { path: 'jeans-pants/bulk-jeans', component: BulkJeansComponent },
  { path: 'jeans-pants/denim-manufacturers', component: DenimManufacturersComponent },
  { path: 'jeans-pants/jean-manufacturers', component: JeanManufacturersComponent },
  { path: 'jeans-pants/jeans-manufacturers', component: JeansManufacturersComponent },
  { path: 'jeans-pants/jeans-manufacturing-cost', component: JeansManufacturingCostComponent },
  { path: 'jeans-pants/jeans-pants-manufacturers', component: JeansPantsManufacturersComponent },
  { path: 'jeans-pants/jeans-wholesale', component: JeansWholesaleComponent },
  { path: 'jeans-pants/kevlar-jeans-manufacturers', component: KevlarJeansManufacturersComponent },
  { path: 'jeans-pants/wholesale-denim-jeans-suppliers', component: WholesaleDenimJeansSuppliersComponent },
  { path: 'jeans-pants/wholesale-jeans-manufacturers', component: WholesaleJeansManufacturersComponent },
  { path: 'jeans-pants/wholesale-jeans-bulk', component: WholesaleJeansBulkComponent },
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

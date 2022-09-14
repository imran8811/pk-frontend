import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  WholesaleWomenJeansComponent
} from './components';

const routes: Routes = [
  { path: 'jeans-pants/wholesale-women-jeans', component: WholesaleWomenJeansComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class WomenLandingPagesRoutingModule {}

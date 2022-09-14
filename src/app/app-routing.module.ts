import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../modules/static/static.module').then(module => module.StaticModule),
  },
  {
    path: 'men',
    loadChildren: () => import('../modules/men-landing-pages/men-landing-pages.module').then(module => module.MenLandingPagesModule),
  },
  {
    path: 'women',
    loadChildren: () => import('../modules/women-landing-pages/women-landing-pages.module').then(module => module.WomenLandingPagesModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('../modules/admin/admin.module').then(module => module.AdminModule),
  },
  {
    path: 'wholesale-shop',
    loadChildren: () => import('../modules/shop/shop.module').then(module => module.ShopModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

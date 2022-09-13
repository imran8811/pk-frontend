import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../modules/static/static.module').then(module => module.StaticModule),
  },
  {
    path: 'men',
    loadChildren: () => import('../modules/landing-pages/landing-pages.module').then(module => module.LandingPagesModule),
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

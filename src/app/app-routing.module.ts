import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'material-prices',
    loadChildren: () => import('./pages/material-prices/material-prices.module').then(m => m.MaterialPricesPageModule)
  },
  {
    path: 'exchange-rates',
    loadChildren: () => import('./pages/exchange-rates/exchange-rates.module').then( m => m.ExchangeRatesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

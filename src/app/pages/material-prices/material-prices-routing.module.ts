import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialPricesPage } from './material-prices.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialPricesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialPricesPageRoutingModule {}

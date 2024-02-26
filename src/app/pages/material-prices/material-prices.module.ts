import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialPricesPageRoutingModule } from './material-prices-routing.module';

import { MaterialPricesPage } from './material-prices.page';
import {NgChartsModule } from 'ng2-charts';
import {CustomLabeledCardComponent} from "../../components/custom-labeled-card/custom-labeled-card.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MaterialPricesPageRoutingModule,
        NgChartsModule,
        CustomLabeledCardComponent
    ],
  declarations: [MaterialPricesPage]
})
export class MaterialPricesPageModule {}

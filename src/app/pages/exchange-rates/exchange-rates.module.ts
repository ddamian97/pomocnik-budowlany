import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangeRatesPageRoutingModule } from './exchange-rates-routing.module';

import { ExchangeRatesPage } from './exchange-rates.page';
import {CustomLabeledCardComponent} from "../../components/custom-labeled-card/custom-labeled-card.component";
import {NgChartsModule} from "ng2-charts";
import { CurrencyPipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExchangeRatesPageRoutingModule,
    CustomLabeledCardComponent,
    NgChartsModule,
    CurrencyPipe
  ],
  declarations: [ExchangeRatesPage]
})
export class ExchangeRatesPageModule {}

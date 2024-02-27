import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from "@ionic/angular";
import { ExchangeService } from "../../services/exchange.service";

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.page.html',
  styleUrls: ['./exchange-rates.page.scss'],
})
export class ExchangeRatesPage implements OnInit {

  exchangeData: any[] = [];
  symbols = ['EUR', 'USD', 'GBP'];

  constructor(
    private alertController: AlertController,
    private exchangeService: ExchangeService,
    private loadingController: LoadingController,
  ) {}

  ngOnInit() {
    this.getData();
  }

  async presentAlert(message = 'Try again later') {
    const alert = await this.alertController.create({
      header: 'Something went wrong',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async getData() {
    const loading = await this.loadingController.create();
    await loading.present();

    for (const symbol of this.symbols) {
      try {
        const value = await this.exchangeService.latestValue(symbol);
        this.exchangeData.push({ symbol, value });
      } catch (error) {
        console.error(`Błąd podczas pobierania danych dla ${symbol}:`, error);
        await this.presentAlert('Błąd podczas pobierania danych');
      }
    }

    await loading.dismiss();
  }

  getExchangeValue(symbol: string): string {
    const data = this.exchangeData.find(item => item.symbol === symbol);
    return data ? data.value['PLN'] : null;
  }
}

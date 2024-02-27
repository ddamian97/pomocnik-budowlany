import { Component, OnInit } from '@angular/core';
import {ChartDataset} from "chart.js";
import {HttpClient} from "@angular/common/http";
import {AlertController, LoadingController} from "@ionic/angular";
import {ExchangeService} from "../../services/exchange.service";

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.page.html',
  styleUrls: ['./exchange-rates.page.scss'],
})
export class ExchangeRatesPage implements OnInit {
  countryNames = new Map();

  segment: string = 'ALUMINUM';

  chartData: ChartDataset[] = [{ data: [], label: 'Commodities prices' }];
  chartLabels: string[] | undefined;

  // Options
  chartOptions = {
    responsive: true,
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    },
  };
  chartType: "bar" | "line" | "scatter" | "bubble" | "pie" | "doughnut" | "polarArea" | "radar" = "bar";
  showLegend = false;

  constructor(private http: HttpClient,
              private alertController: AlertController,
              private exchangeService: ExchangeService,
              private loadingController: LoadingController,
              ) {
  }

  ngOnInit() {
    this.getData()
  }

  async presentAlert(message = 'Try again later') {
    const alert = await this.alertController.create({
      header: 'Something went wrong',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async getData(function_name = 'ALUMINUM') {
    const loading = await this.loadingController.create();
    await loading.present();
    this.exchangeService.getCountries().subscribe({
      next: (res) => {
        console.log('res');
        console.log(res);
        loading.dismiss();
      },
      error: async (error) => {
        console.log('error');
        console.log(error);
        loading.dismiss();
        await this.presentAlert(error);

      }
    })
  }
  segmentChange(){
    this.getData(this.segment);
  }
}

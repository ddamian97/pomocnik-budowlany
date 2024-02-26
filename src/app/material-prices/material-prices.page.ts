import { Component, OnInit } from '@angular/core';
import {ChartDataset, Color} from 'chart.js';
import {HttpClient} from "@angular/common/http";
import _default from "chart.js/dist/plugins/plugin.tooltip";
import type = _default.defaults.animations.numbers.type;
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-material-prices',
  templateUrl: './material-prices.page.html',
  styleUrls: ['./material-prices.page.scss'],
})
export class MaterialPricesPage implements OnInit {

  segment: string = 'ALUMINUM';

  chartData: ChartDataset[] = [{ data: [], label: 'Commodities prices' }];
  chartLabels: string[] | undefined;

  // Options
  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Historic Stock price'
    },
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

  constructor(private http: HttpClient, private alertController: AlertController) {
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

  getData(function_name = 'ALUMINUM') {
    this.http.get(`https://www.alphavantage.co/query?function=${function_name}&interval=monthly&apikey=37BLD6D5U7OEKS3U`).subscribe(async (res: any) => {
      if ('data' in res) {
        const data: any[] = res['data'];
        this.chartLabels = [];
        this.chartData[0].data = [];
        if (data && Array.isArray(data)) {
          for (let entry of data) {
            this.chartLabels.push(entry['date']);
            this.chartData[0].data.push(entry['value']);
          }
        }else{
          await this.presentAlert();
        }
      } else {
        if ('Information' in res) {
          await this.presentAlert(res['Information']);
        }else{
          await this.presentAlert();
        }
      }
    });
  }
  segmentChange(){
    this.getData(this.segment);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {switchMap} from "rxjs";
// @ts-ignore
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  API_KEY = 'fca_live_cb8xuU8Fwghv53puIrCE3GDborXOKCQhm4J7o1O0';
  freecurrencyapi = new Freecurrencyapi(this.API_KEY);

  constructor(private http: HttpClient) {}

  async latestValue(base_currency = 'USD'): Promise<any> {
    try {
      const response: any = await this.freecurrencyapi.latest({
        base_currency: base_currency,
        currencies: 'PLN'
      });
      return response.data;
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error);
      throw error;
    }
  }
}

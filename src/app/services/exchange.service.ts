import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EXCHANGE_API_URL} from "./consts";
import {switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  API_KEY = '7488255780c23c61f7a6';

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(`https://free.currencyconverterapi.com/api/v6/currencies?apiKey=${this.API_KEY}`);
  }

  login(email: string, password: string){
    return this.http.post(`${EXCHANGE_API_URL}/auth`, {email, password});
  }
  register(email: string, password: string){
    return this.http.post(`${EXCHANGE_API_URL}/users`, {email, password}).pipe(
      switchMap(_ => {
        return this.login(email, password);
      })
    );
  }
}

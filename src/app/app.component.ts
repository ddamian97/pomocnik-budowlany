import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Exchange rates', url: '/material-prices', icon: 'bar-chart' },
    { title: 'Currency rates', url: '/exchange-rates', icon: 'trending-up' },
    { title: 'Todo list', url: '/todo', icon: 'list' },
  ];
  constructor() {}
}

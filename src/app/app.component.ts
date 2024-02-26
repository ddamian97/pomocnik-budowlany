import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ceny materiałów', url: '/material-prices', icon: 'bar-chart' },
  ];
  constructor() {}
}

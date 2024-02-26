import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialPricesPage } from './material-prices.page';

describe('MaterialPricesPage', () => {
  let component: MaterialPricesPage;
  let fixture: ComponentFixture<MaterialPricesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MaterialPricesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

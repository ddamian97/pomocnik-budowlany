import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiaryFormPage } from './diary-form.page';

describe('DiaryFormPage', () => {
  let component: DiaryFormPage;
  let fixture: ComponentFixture<DiaryFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiaryFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

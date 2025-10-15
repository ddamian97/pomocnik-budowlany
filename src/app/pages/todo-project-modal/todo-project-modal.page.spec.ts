import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoProjectModalPage } from './todo-project-modal.page';

describe('TodoProjectModalPage', () => {
  let component: TodoProjectModalPage;
  let fixture: ComponentFixture<TodoProjectModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodoProjectModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

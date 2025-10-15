import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoProjectModalPage } from './todo-project-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TodoProjectModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoProjectModalPageRoutingModule {}

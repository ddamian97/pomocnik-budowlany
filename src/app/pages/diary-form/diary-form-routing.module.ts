import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaryFormPage } from './diary-form.page';

const routes: Routes = [
  {
    path: '',
    component: DiaryFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryFormPageRoutingModule {}

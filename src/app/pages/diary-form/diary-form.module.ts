import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiaryFormPageRoutingModule } from './diary-form-routing.module';

import { DiaryFormPage } from './diary-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiaryFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DiaryFormPage]
})
export class DiaryFormPageModule {}

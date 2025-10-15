import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoProjectModalPageRoutingModule } from './todo-project-modal-routing.module';

import { TodoProjectModalPage } from './todo-project-modal.page';

import { ColorCircleModule } from 'ngx-color/circle';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoProjectModalPageRoutingModule,
    ColorCircleModule
  ],
  declarations: [TodoProjectModalPage]
})
export class TodoProjectModalPageModule {}

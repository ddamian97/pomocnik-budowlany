import { Component, OnInit } from '@angular/core';
import {DataService, Project} from "../../services/data.service";
import {ModalController} from "@ionic/angular";
import {ColorEvent} from "ngx-color";

@Component({
  selector: 'app-todo-project-modal',
  templateUrl: './todo-project-modal.page.html',
  styleUrls: ['./todo-project-modal.page.scss'],
})
export class TodoProjectModalPage {
  project: Project = {
    name: '',
    color: '#f4f4f4'
  }
  showColors = false;

  constructor(private modalController: ModalController,
              private dataService: DataService) { }

  async save(){
    await this.dataService.addProject(this.project);
    this.modalController.dismiss({ reload: true });
  }
  cancel(){
    this.modalController.dismiss({ reload: true });
  }
  colorSelected(event: ColorEvent){
    this.project.color = event.color.hex;
  }

}

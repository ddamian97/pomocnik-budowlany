import {Component, OnInit} from '@angular/core';
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {DataService, Project} from "../../services/data.service";
import {TodoProjectModalPage} from "../todo-project-modal/todo-project-modal.page";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit{
  projects: any[] | undefined;

  constructor(private modalController: ModalController,
              private routerOutlet: IonRouterOutlet,
              private dataService: DataService) { }

  ngOnInit(): void {
        this.loadData();
    }

  async loadData(){
    this.projects = await this.dataService.getProjects()
  }

  async addCategory() {
    const modal = await this.modalController.create({
      component: TodoProjectModalPage,
      presentingElement: this.routerOutlet.nativeEl,
    });

    await modal.present();

    const result = await modal.onDidDismiss();
    if(result && result.data && result.data.reload){
      await this.loadData();
    }
  }

  getProjectSummary(project: Project): string {
    if (!project.tasks) {
      return 'Brak zadań';
    }
    const completed = project.tasks.filter(t => t.done).length;
    const total = project.tasks.length;
    if (total === 0) {
      return 'Brak zadań';
    }
    return `Ukończono ${completed} z ${total}`;
  }

}

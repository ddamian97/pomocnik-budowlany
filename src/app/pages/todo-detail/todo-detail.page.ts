import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService, Project, Task } from '../../services/data.service'; // Use your service interfaces

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.page.html',
  styleUrls: ['./todo-detail.page.scss'],
})
export class TodoDetailPage implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private alertController: AlertController,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.loadProject();
  }

  async loadProject() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (!projectId) {
      this.navController.navigateBack('/todo');
      return;
    }
    this.project = await this.dataService.getProjectById(+projectId);
    console.log(this.project);
  }

  async toggleTask(task: Task) {
    task.done = !task.done;
    await this.dataService.updateTask(task);
  }

  async addNewTask() {
    const alert = await this.alertController.create({
      header: 'Nowe zadanie',
      inputs: [
        {
          name: 'taskName',
          type: 'text',
          placeholder: 'np. Zamówić okna'
        }
      ],
      buttons: [
        { text: 'Anuluj', role: 'cancel' },
        {
          text: 'Dodaj',
          handler: async (data) => {
            if (data.taskName && this.project?.id !== undefined) {
              const newTask: Task = {
                name: data.taskName,
                project: this.project.id
              };
              await this.dataService.addTask(newTask);
              await this.loadProject(); // Reload data to show the new task
            }
          }
        }
      ]
    });

    await alert.present();
  }
}

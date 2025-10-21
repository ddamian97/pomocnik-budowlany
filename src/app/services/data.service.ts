import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const PROJECT_KEY = 'categories';
const TASK_KEY = 'tasks';
const DIARY_KEY = 'diary_entries';

export interface Project {
  name: string;
  color: string;
  tasks?: Task[];
  id?: number;
}

export interface Task {
  name: string;
  project?: number;
  priority?: number;
  due?: string
  done?: boolean;
  id?: number;
}

export interface DiaryAttachment {
  name: string;
  path: string;
  type: 'image' | 'document';
}

export interface DiaryEntry {
  id: number;
  title: string;
  date: string;
  description: string;
  attachments?: DiaryAttachment[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async getProjects(): Promise<Project[]> {
    const projects = await this.getProjectsAsArray();
    const tasks = await this.getTasksAsArray();

    // Map tasks to their respective projects
    return projects.map(proj => {
      proj.tasks = tasks.filter(task => task.project === proj.id);
      return proj;
    });
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    const projects = await this.getProjects(); // This now includes tasks
    return projects.find(p => p.id === id);
  }

  async addProject(proj: Project) {
    let projArray = await this.getProjectsAsArray(false);
    proj.id = Date.now();
    projArray.push(proj);
    return this.storage.set(PROJECT_KEY, JSON.stringify(projArray));
  }

  private async getProjectsAsArray(addInbox = true): Promise<Project[]> {
    const storedProjects = await this.storage.get(PROJECT_KEY);
    let projArray: Project[] = storedProjects ? JSON.parse(storedProjects) : [];

    if (addInbox && !projArray.find(p => p.id === 0)) {
      projArray.unshift({ // Use unshift to add it to the beginning
        name: 'Inbox',
        color: '#92949c',
        id: 0,
        tasks: []
      });
    }
    return projArray;
  }

  async addTask(task: Task): Promise<void> {
    const tasks = await this.getTasksAsArray();
    task.id = Date.now();
    task.done = false;
    tasks.push(task);
    await this.storage.set(TASK_KEY, JSON.stringify(tasks));
  }

  async updateTask(updatedTask: Task): Promise<void> {
    const tasks = await this.getTasksAsArray();
    const index = tasks.findIndex(task => task.id === updatedTask.id);
    if (index > -1) {
      tasks[index] = updatedTask;
      await this.storage.set(TASK_KEY, JSON.stringify(tasks));
    }
  }

  private async getTasksAsArray(): Promise<Task[]> {
    const storedTasks = await this.storage.get(TASK_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  async getDiaryEntries(): Promise<DiaryEntry[]> {
    const entries = await this.storage.get(DIARY_KEY);
    return entries ? JSON.parse(entries) : [];
  }

  async getDiaryEntryById(id: number): Promise<DiaryEntry | undefined>{
    const entries = await this.getDiaryEntries();
    return entries.find(entry => entry.id === id);
  }

  async addDiaryEntry(entry: Omit<DiaryEntry, 'id'>): Promise<void> {
    const entries = await this.getDiaryEntries();
    const newEntry: DiaryEntry = {
      id: Date.now(),
      ...entry
    };
    entries.unshift(newEntry);
    await this.storage.set(DIARY_KEY, JSON.stringify(entries));
  }

  async updateDiaryEntry(updatedEntry: DiaryEntry): Promise<void> {
    let entries = await this.getDiaryEntries();
    const index = entries.findIndex(entry => entry.id === updatedEntry.id);
    if (index > -1) {
      entries[index] = updatedEntry;
      await this.storage.set(DIARY_KEY, JSON.stringify(entries));
    }
  }
}

import { Component } from '@angular/core';
import { DataService, DiaryEntry } from '../../services/data.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage {
  entries: DiaryEntry[] = [];

  constructor(private dataService: DataService) {}

  ionViewWillEnter() {
    this.loadEntries();
  }

  async loadEntries() {
    this.entries = await this.dataService.getDiaryEntries();
  }
}

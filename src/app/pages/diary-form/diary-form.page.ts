import { Component, OnInit } from '@angular/core';
import { DataService, DiaryAttachment } from "../../services/data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.page.html',
  styleUrls: ['./diary-form.page.scss'],
})
export class DiaryFormPage implements OnInit {
  diaryForm: FormGroup;
  isEditMode = false;
  entryId: number | null = null;
  attachments: DiaryAttachment[] = [];
  maxDate = new Date().toISOString();

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute,
    private navController: NavController,
  ) {
    this.diaryForm = this.fb.group({
      title: ['', Validators.required],
      date: [new Date().toISOString(), Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.entryId = +id;
      this.loadEntryData(+id);
    }
  }

  async loadEntryData(id: number) {
    const entry = await this.dataService.getDiaryEntryById(id);
    if (entry) {
      this.diaryForm.patchValue({
        title: entry.title,
        date: entry.date,
        description: entry.description
      });
      this.attachments = entry.attachments;
    }
  }

  async addPhoto() {
    console.log('addPhoto');
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt
    });

    if (image.webPath) {
      const newAttachment: DiaryAttachment = {
        name: `photo_${Date.now()}.jpeg`,
        path: image.webPath,
        type: 'image'
      };
      this.attachments.push(newAttachment);
    }
  }

  removeAttachment(attachmentToRemove: DiaryAttachment) {
    this.attachments = this.attachments.filter(att => att.path !== attachmentToRemove.path);
  }

  async saveEntry() {
    if (this.diaryForm.invalid) {
      return;
    }

    const formData = {
      ...this.diaryForm.value,
      attachments: this.attachments
    };

    if (this.isEditMode && this.entryId !== null) {
      await this.dataService.updateDiaryEntry({ id: this.entryId, ...formData });
    } else {
      await this.dataService.addDiaryEntry(formData);
    }
    this.navController.navigateBack('/diary');
  }
}

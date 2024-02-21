import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertController, LoadingController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['example@pomocnik.pl', [Validators.required, Validators.email]],
      password: ['1234', Validators.required]
    });
  }
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.router.navigateByUrl(`/folder/inbox`);
    }, 2000);

  }

}

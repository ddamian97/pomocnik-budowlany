import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertController, LoadingController, MenuController} from "@ionic/angular";
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
    private router: Router,
    public menuCtrl: MenuController
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
      this.router.navigateByUrl(`material-prices`);
    }, 2000);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}

// src/app/login/login.page.ts

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async login() {
    try {
      const res = await this.authService.login({ email: this.email, password: this.password }).toPromise();
      localStorage.setItem('token', res.token);
      this.router.navigate(['/home']);
    } catch (err) {
      console.error('Login error:', err);
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Please check your credentials and try again.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}

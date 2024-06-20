// src/app/register/register.page.ts

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async register() {
    try {
      const res = await this.authService.register({ name: this.name, email: this.email, password: this.password }).toPromise();
      localStorage.setItem('token', res.token);
      this.router.navigate(['/home']);
    } catch (err) {
      console.error('Registration error:', err);
      const alert = await this.alertController.create({
        header: 'Registration Failed',
        message: 'Registration failed. Please try again later.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}

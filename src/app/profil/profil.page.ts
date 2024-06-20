import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';  // Pastikan import AuthService
import { Router } from '@angular/router';  // Pastikan import Router

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage {

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private router: Router
  ) {}

  editProfile() {
    this.navCtrl.navigateForward('/edit-profil'); // Navigasi ke halaman edit profil
  }

  navigateToKeamananAkun() {
    this.navCtrl.navigateForward('/keamanan-akun'); // Navigasi ke halaman keamanan akun
  }

  // Metode untuk logout
  logout() {
    this.authService.logout(); // Panggil method logout dari AuthService
    this.router.navigate(['/login']); // Navigasi ke halaman login setelah logout
  }
}

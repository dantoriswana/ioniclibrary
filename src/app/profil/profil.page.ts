import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';  // Make sure AuthService is imported
import { Router } from '@angular/router';  // Make sure Router is imported

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage {

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController  // Inject AlertController
  ) {}

  editProfile() {
    this.navCtrl.navigateForward('/edit-profil'); // Navigate to edit profile page
  }

  navigateToKeamananAkun() {
    this.navCtrl.navigateForward('/keamanan-akun'); // Navigate to account security page
  }

  // Method to logout
  async logout() {
    const alert = await this.alertController.create({
      header: 'Konfirmasi Logout',
      message: 'Apakah Anda yakin ingin logout?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Logout dibatalkan');
          }
        }, {
          text: 'Logout',
          handler: () => {
            this.authService.logout(); // Call logout method from AuthService
            this.router.navigate(['/login']); // Navigate to login page after logout
          }
        }
      ]
    });

    await alert.present();
  }
}

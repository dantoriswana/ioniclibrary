import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage {
  profileImage: string | ArrayBuffer = '';

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {
    // Load saved profile image from local storage
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      this.profileImage = savedImage;
    }
  }

  editProfile() {
    this.navCtrl.navigateForward('/edit-profil'); // Navigate to edit profile page
  }

  navigateToKeamananAkun() {
    this.navCtrl.navigateForward('/keamanan-akun'); // Navigate to account security page
  }

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

  onFileChange(event: any) {
    const reader = new FileReader();

    reader.onload = () => {
      this.profileImage = reader.result as string;
      localStorage.setItem('profileImage', this.profileImage as string); // Save profile image to local storage
    };

    if (event.target.files && event.target.files.length > 0) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}

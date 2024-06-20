import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
})
export class PengaturanPage implements OnInit {

  // Pengaturan default
  notificationSettings = {
    enableNotifications: true,
    sound: true,
    vibrate: true,
    showOnLockScreen: true,
    emailNotifications: false
  };

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    // Muat pengaturan dari localStorage jika ada
    const savedSettings = localStorage.getItem('notificationSettings');
    if (savedSettings) {
      this.notificationSettings = JSON.parse(savedSettings);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Tentang Aplikasi',
      subHeader: 'Versi 1.0.0',
      message: 'Temukan kecerdasan di setiap halaman dengan Rakbuku.Aplikasi ini menawarkan pengalaman membaca yang menyenangkan dan interaktif, serta fitur pencarian yang intuitif untuk menemukan buku yang sesuai dengan minat Anda.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentPrivacyPolicyAlert() {
    const alert = await this.alertController.create({
      header: 'Kebijakan Privasi',
      message: 'Rak Buku berkomitmen untuk melindungi privasi pengguna kami. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan aplikasi Rak Buku.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentHelpCenterAlert() {
    const alert = await this.alertController.create({
      header: 'Pusat Bantuan',
      message: 'Hubungi kami di rakbuku@gmail.com jika ada masalah.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentNotificationSettingsAlert() {
    const alert = await this.alertController.create({
      header: 'Pengaturan Notifikasi',
      inputs: [
        {
          name: 'enableNotifications',
          type: 'checkbox',
          label: 'Aktifkan Notifikasi',
          value: 'enableNotifications',
          checked: this.notificationSettings.enableNotifications
        },
        {
          name: 'sound',
          type: 'checkbox',
          label: 'Nada Dering',
          value: 'sound',
          checked: this.notificationSettings.sound
        },
        {
          name: 'vibrate',
          type: 'checkbox',
          label: 'Mode Getar',
          value: 'vibrate',
          checked: this.notificationSettings.vibrate
        },
        {
          name: 'showOnLockScreen',
          type: 'checkbox',
          label: 'Tampilkan di Layar Kunci',
          value: 'showOnLockScreen',
          checked: this.notificationSettings.showOnLockScreen
        },
        {
          name: 'emailNotifications',
          type: 'checkbox',
          label: 'Notifikasi Email',
          value: 'emailNotifications',
          checked: this.notificationSettings.emailNotifications
        }
      ],
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
        },
        {
          text: 'Simpan',
          handler: (data) => {
            console.log('Pengaturan Notifikasi:', data);
            // Simpan pengaturan notifikasi
            this.notificationSettings = {
              enableNotifications: data.includes('enableNotifications'),
              sound: data.includes('sound'),
              vibrate: data.includes('vibrate'),
              showOnLockScreen: data.includes('showOnLockScreen'),
              emailNotifications: data.includes('emailNotifications')
            };
            localStorage.setItem('notificationSettings', JSON.stringify(this.notificationSettings));
          }
        }
      ]
    });

    await alert.present();
  }
}
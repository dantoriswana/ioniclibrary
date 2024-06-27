import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

interface Profile {
  name: string;
  email: string;
  password: string;
  phone: string;
  education: string;
  birthdate: string;
  profileImage: string;
}

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.page.html',
  styleUrls: ['./edit-profil.page.scss'],
})
export class EditProfilPage implements OnInit {
  profile: Profile = {
    name: '',
    email: '',
    password: '',
    phone: '',
    education: '',
    birthdate: '',
    profileImage: ''
  };
  selectedFile: File | null = null;

  constructor(private navCtrl: NavController, private http: HttpClient) {
    const savedProfile = localStorage.getItem('profile');
    if (savedProfile) {
      this.profile = JSON.parse(savedProfile);
    }
  }

  ngOnInit() {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.uploadFile();
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Replace 'YOUR_API_ENDPOINT_FOR_UPLOAD' with your actual API endpoint for file upload
      this.http.post<{ fileUrl: string }>('YOUR_API_ENDPOINT_FOR_UPLOAD', formData).subscribe(response => {
        console.log('Upload berhasil', response);
        // Assuming your API response has a 'fileUrl' property
        this.profile.profileImage = response.fileUrl;
      }, error => {
        console.error('Upload gagal', error);
      });
    }
  }

  saveProfile() {
    // Simpan profil ke local storage
    localStorage.setItem('profile', JSON.stringify(this.profile));

    // Kirim data profil yang diperbarui ke server
    // Replace 'YOUR_API_ENDPOINT_FOR_PROFILE_UPDATE' with your actual API endpoint for profile update
    this.http.post('YOUR_API_ENDPOINT_FOR_PROFILE_UPDATE', this.profile).subscribe(response => {
      console.log('Profil berhasil diperbarui', response);
      this.navCtrl.back();
    }, error => {
      console.error('Gagal memperbarui profil', error);
    });
  }
}

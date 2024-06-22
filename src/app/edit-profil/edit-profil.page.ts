import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.page.html',
  styleUrls: ['./edit-profil.page.scss'],
})
export class EditProfilPage {
  selectedFile: File | null = null;

  constructor() {}

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

      // Kirim formData ke server untuk diupload
      // Contoh dengan HttpClient (Anda perlu mengimpor dan menyuntikkan HttpClient di constructor)
      // this.http.post('YOUR_API_ENDPOINT', formData).subscribe(response => {
      //   console.log('Upload berhasil', response);
      // }, error => {
      //   console.error('Upload gagal', error);
      // });
    }
  }
}

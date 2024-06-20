import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage {
  books: any[] = [
    { id: 1, title: 'Laut Bercerita', author: 'haris', imageUrl: 'assets/imgs/1.jpg' },
    // Tambahkan buku lainnya sesuai kebutuhan
  ];

  filteredBooks: any[] = [];

  constructor(private router: Router) {
    this.filteredBooks = [...this.books]; // Menyalin semua buku ke hasil pencarian awal
  }

  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm.trim() === '') {
      this.filteredBooks = [...this.books]; // Kembali ke daftar lengkap jika kotak pencarian kosong
    } else {
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)
      );
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage {
  books: any[] = [
    { id: 1, title: 'Laut Bercerita', author: 'Leila S. Chudori', imageUrl: 'assets/imgs/1.jpg' },
    { id: 2, title: 'Hana Bocil', author: 'Pramoedya Ananta Toer', imageUrl: 'assets/imgs/2.jpg' },
    { id: 3, title: 'Danto Bercerita', author: 'Andrea Hirata', imageUrl: 'assets/imgs/3.jpg' },
    { id: 4, title: 'Amel Bucin', author: 'Author Name', imageUrl: 'assets/imgs/4.jpg' },
    { id: 5, title: 'Ikbal Sad Boy', author: 'Author Name', imageUrl: 'assets/imgs/5.jpg' },
    { id: 6, title: 'Zainal Bad Boy', author: 'Author Name', imageUrl: 'assets/imgs/6.jpg' },
    // Tambahkan buku lainnya sesuai kebutuhan
  ];

  filteredBooks: any[] = []; // Awalnya kosong
  searchTerm: string = ''; // Untuk menyimpan kata kunci pencarian

  constructor(private router: Router) {}

  onSearch(event: any) {
    this.searchTerm = event.target.value.toLowerCase();

    // Filter buku berdasarkan input pencarian
    if (this.searchTerm.trim() === '') {
      this.filteredBooks = []; // Kosongkan jika kotak pencarian kosong
    } else {
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(this.searchTerm) || book.author.toLowerCase().includes(this.searchTerm)
      );
    }
  }

  openBook(bookId: number) {
    // Navigasi ke halaman detail buku berdasarkan ID
    this.router.navigate(['/book-detail', bookId]);
  }
}

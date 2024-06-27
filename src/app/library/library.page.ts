import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];
  searchTerm: string = '';

  constructor(private router: Router, private apiService: ApiService,private navCtrl: NavController) {}

  ngOnInit() {
    this.apiService.getBooks().subscribe((data: any[]) => {
      this.books = data;
      this.filteredBooks = data; // Inisialisasi filteredBooks dengan semua buku
    });
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value.toLowerCase();

    if (this.searchTerm.trim() === '') {
      this.filteredBooks = this.books; // Tampilkan semua buku jika kotak pencarian kosong
    } else {
      this.filteredBooks = this.books.filter(book => {
        const judulBuku = book.judul_buku ? book.judul_buku.toLowerCase() : '';
        const pengarang = book.pengarang ? book.pengarang.toLowerCase() : '';
        return judulBuku.includes(this.searchTerm) || pengarang.includes(this.searchTerm);
      });
    }
  }

  openBook(bookId: number) {
    this.router.navigate(['/book-detail', bookId]);
  }


  
  openBookDetail(id: string) {
    this.navCtrl.navigateForward(`/book-detail/${id}`);
  }
  
}

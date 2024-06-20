import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service'; // Sesuaikan dengan lokasi BookService Anda

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  book: any = {}; // Inisialisasi objek untuk menyimpan detail buku

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.getBookDetail();
  }

  getBookDetail() {
    const bookId = this.route.snapshot.paramMap.get('id'); // Ambil id buku dari URL
    if (bookId) {
      this.loadBookDetail(+bookId); // Panggil metode untuk memuat detail buku
    }
  }

  loadBookDetail(bookId: number) {
    this.bookService.getBook(bookId).subscribe((data) => {
      this.book = data; // Memuat detail buku dari BookService
    });
  }
}

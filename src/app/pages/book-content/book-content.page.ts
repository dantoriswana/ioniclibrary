import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.page.html',
  styleUrls: ['./book-content.page.scss'],
})
export class BookContentPage implements OnInit {
  bookContent: any[] = []; // Initialize as an array to store book content

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.getBookContent();
  }

  getBookContent() {
    const bookId = this.route.snapshot.paramMap.get('id');
    console.log('Book ID from URL:', bookId);
    if (bookId) {
      this.loadBookContent(+bookId);
    }
  }

  loadBookContent(bookId: number) {
    this.bookService.getBookContent(bookId).subscribe({
      next: (data) => {
        console.log('Book content received:', data);
        this.bookContent = data;
        console.log('Book content assigned:', this.bookContent);
      },
      error: (error) => {
        console.error('Error fetching book content:', error);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { BookService } from '../../services/book.service'; // Adjust according to your BookService location

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  book: any = {}; // Initialize an object to store book details

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Inject Router
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.getBookDetail();
  }

  getBookDetail() {
    const bookId = this.route.snapshot.paramMap.get('id'); // Get book id from URL
    console.log('Book ID from URL:', bookId); // Print bookId to console
    if (bookId) {
      this.loadBookDetail(+bookId); // Call method to load book details
    }
  }

  readBook(id: string) {
    this.router.navigate(['/book-content', id]); // Use this.router to navigate
  }

  loadBookDetail(bookId: number) {
    this.bookService.getBook(bookId).subscribe({
      next: (data) => {
        console.log('Book data received:', data); // Print book data to console
        this.book = data; // Load book details from BookService
      },
      error: (error) => {
        console.error('Error fetching book details:', error); // Print error if any
      },
    });
  }
}

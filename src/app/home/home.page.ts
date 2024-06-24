import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  books: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBooks().subscribe((data: any[]) => {
      this.books = data;
    });
  }
}

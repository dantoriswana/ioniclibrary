import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8000/api/books'; // Ganti sesuai dengan URL API Anda

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBook(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  likeBook(bookId: number, liked: boolean): Observable<any> {
    const body = { liked: liked }; // Misalnya, kirim status liked ke backend
    return this.http.put<any>(`${this.apiUrl}/${bookId}/like`, body);
  }
}

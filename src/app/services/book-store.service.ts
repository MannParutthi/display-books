import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookModel } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  booksListJsonUrl = 'assets/books.json';
  constructor(private http: HttpClient) { }

  getBooksList(): Observable<BookModel[]> {
    return this.http.get(this.booksListJsonUrl) as Observable<BookModel[]>;
  }
}

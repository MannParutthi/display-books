import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BookModel } from '../interfaces/book.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/appState.model';
import { AddBookAction } from '../store/actions/book.action';
import { Book } from '../store/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  booksListJsonUrl = 'assets/books.json';
  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getBooksList(): Observable<BookModel[]> {
    let bookList = this.http.get(this.booksListJsonUrl);
    bookList.forEach((book: Book) => {
      this.store.dispatch(new AddBookAction(book))
    });
    return bookList as Observable<BookModel[]>;
  }

}

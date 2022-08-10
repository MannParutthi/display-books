import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BookModel } from '../interfaces/book.interface';
import { Store } from '@ngrx/store';
import { AddBookImageAction } from '../store/actions/bookImages.action';
import { AppState } from '../store/models/appState.model';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  booksListJsonUrl = 'assets/books.json';
  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getBooksList(): Observable<BookModel[]> {
    return this.http.get(this.booksListJsonUrl) as Observable<BookModel[]>;
  }

  getBookImage(dataURL): Observable<string | ArrayBuffer> {
    let blobRes = new Subject<string | ArrayBuffer>();

    let isImgFoundInStore: Boolean = false;

    this.store.select(state => state.bookImage).subscribe((storeData) => {
      storeData.forEach(data => {
        if(data.imageUrl == dataURL) {
          isImgFoundInStore = true;
          blobRes.next(data.imageBase64);
        }
      });
    });

    if(!isImgFoundInStore) {
      this.http.get(dataURL, {responseType: "blob"}).subscribe({
        next: (blob) => {
          let reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            this.store.dispatch(new AddBookImageAction({imageUrl: dataURL, imageBase64: String(reader.result)}))
            blobRes.next(reader.result);
          }
        }
      });
    }

    return blobRes.asObservable();
  }

}

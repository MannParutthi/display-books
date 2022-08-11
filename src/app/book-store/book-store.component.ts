import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '../services/book-store.service';
import { BookModel } from '../interfaces/book.interface';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.less']
})
export class BookStoreComponent implements OnInit {

  originalBooksList: BookModel[] = [];
  booksList: BookModel[] = [];

  titleSortStatus: SortingStatus = SortingStatus.NONE;
  votesSortStatus: SortingStatus = SortingStatus.NONE;

  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit(): void {
    this.getListOfBooks();
  }

  getListOfBooks(): void {
    this.bookStoreService.getBooksList().subscribe({
      next: (res) => {
        this.booksList = res;
        this.originalBooksList = JSON.parse(JSON.stringify(res)) as typeof res; // Deep Copy
      }
    });
  }

  toggleSort(fieldName: any): void {
    switch(fieldName) {
      case 'title': {
        this.titleSortStatus = SortingStatus.after(this.titleSortStatus);
        this.votesSortStatus = SortingStatus.NONE;
        if(this.titleSortStatus == SortingStatus.ASC) {
          this.booksList.sort((book1, book2) => (String(book1.title)).localeCompare(String(book2.title)));
        }
        else if(this.titleSortStatus == SortingStatus.DESC) {
          this.booksList.sort((book1, book2) => (String(book2.title)).localeCompare(String(book1.title)));
        }
        else {
          this.booksList = JSON.parse(JSON.stringify(this.originalBooksList));
        }
        break;
      }

      case 'votes': {
        this.votesSortStatus = SortingStatus.after(this.votesSortStatus);
        this.titleSortStatus = SortingStatus.NONE;
        if(this.votesSortStatus == SortingStatus.ASC) {
          this.booksList.sort((book1, book2) => Number(book1.votes) - Number(book2.votes));
        }
        else if(this.votesSortStatus == SortingStatus.DESC) {
          this.booksList.sort((book1, book2) => Number(book2.votes) - Number(book1.votes));
        }
        else {
          this.booksList = JSON.parse(JSON.stringify(this.originalBooksList));
        }
        break;
      }
    }
  }

  sortingStatus() {
    return SortingStatus;
  }

}

enum SortingStatus {
  NONE = 1, ASC = 2, DESC = 3
};

namespace SortingStatus {
  export function after(value: SortingStatus): SortingStatus {
    if(value == 3) {
      return 1;
    }
    return value + 1;
  }
}

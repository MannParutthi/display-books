import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../interfaces/book.interface';
import { BookStoreService } from '../services/book-store.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;
  constructor(private bookStoreService: BookStoreService) { }
  base64Image;

  ngOnInit(): void {
    this.bookStoreService.getBookImage(this.book.image).subscribe({
      next: (res) => {
        this.base64Image = res;
      }
    })
  }

}

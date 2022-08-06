import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../interfaces/book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;
  constructor() { }

  ngOnInit(): void {
  }

}

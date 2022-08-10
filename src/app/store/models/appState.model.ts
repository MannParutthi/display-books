import { BookModel } from 'src/app/interfaces/book.interface';

export interface AppState {
  readonly book: Array<BookModel>;
}

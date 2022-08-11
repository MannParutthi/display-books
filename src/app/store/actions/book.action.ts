import { Action } from '@ngrx/store';
import { BookModel } from 'src/app/interfaces/book.interface';

export enum BookActionType {
  ADD_BOOK = '[BOOK] Add BOOK',
}

export class AddBookAction implements Action {
  readonly type = BookActionType.ADD_BOOK;
  constructor(public payload: BookModel) {}
}

export type BookAction = AddBookAction;

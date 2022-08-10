import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';

export enum BookActionType {
  ADD_BOOK = '[BOOK] Add BOOK',
}

export class AddBookAction implements Action {
  readonly type = BookActionType.ADD_BOOK;
  constructor(public payload: Book) {}
}

export type BookAction = AddBookAction;

import { Action } from '@ngrx/store';
import { BookImage } from '../models/bookImage.model';

export enum BookImageActionType {
  ADD_IMG = '[BOOKIMAGE] Add BOOKIMAGE',
}

export class AddBookImageAction implements Action {
  readonly type = BookImageActionType.ADD_IMG;
  constructor(public payload: BookImage) {}
}

export type BookImageAction = AddBookImageAction;

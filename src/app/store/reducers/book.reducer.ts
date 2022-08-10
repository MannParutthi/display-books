import { Book } from '../models/book.model';
import { BookAction, BookActionType } from '../actions/book.action';

export function BookReducer(state: Array<Book> = [], action: BookAction) {
   switch (action.type) {
    case BookActionType.ADD_BOOK:
      return [...state, action.payload];
    default:
       return state;
   }
}

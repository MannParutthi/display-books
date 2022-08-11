import { BookModel } from 'src/app/interfaces/book.interface';
import { BookAction, BookActionType } from '../actions/book.action';

export function BookReducer(state: Array<BookModel> = [], action: BookAction) {
   switch (action.type) {
    case BookActionType.ADD_BOOK:
      return [...state, action.payload];
    default:
       return state;
   }
}

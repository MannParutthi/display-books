import { BookImage } from '../models/bookImage.model';
import { BookImageAction, BookImageActionType } from '../actions/bookImages.action';

export function BookImageReducer(state: Array<BookImage> = [], action: BookImageAction) {
   switch (action.type) {
    case BookImageActionType.ADD_IMG:
      return [...state, action.payload];
    default:
       return state;
   }
}

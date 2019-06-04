import { ADD_BOOK, REMOVE_BOOK } from "../actions/actionType";

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return [...state.filter((book, index) => index !== action.index)];

    default:
      return state;
  }
};

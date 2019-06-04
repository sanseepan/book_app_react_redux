import { ADD_BOOK, REMOVE_BOOK } from "../actions/actionType";

export const addBook = book => {
  return {
    type: ADD_BOOK,
    book
  };
};

export const removeBook = index => {
  return {
    type: REMOVE_BOOK,
    index
  };
};
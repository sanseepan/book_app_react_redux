import { combineReducers } from "redux";
import { bookReducer } from "../reducers/bookReducer";

const rootReducer = combineReducers({ books: bookReducer });

export default rootReducer;

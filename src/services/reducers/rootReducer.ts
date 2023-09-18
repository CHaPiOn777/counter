import { combineReducers } from "redux";
import { incrementReducer } from "./reducer";

export const rootReducer = combineReducers({
  increment: incrementReducer
})
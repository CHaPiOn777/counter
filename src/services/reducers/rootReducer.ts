import { combineReducers } from "redux";
import { CounterReducer } from "./reducer";

export const rootReducer = combineReducers({
  counter: CounterReducer
})
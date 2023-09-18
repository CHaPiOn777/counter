import { IncrementActionsTypes} from "../types/counterTypes";

export const INCREMENT = 'INCREMENT'; 
export const DECREMENT = 'DECREMENT';

export const incrementAction = () => {
  return {
      type: IncrementActionsTypes.INCREMENT,
      count: 1
    }
  }
export const decrementAction = () => {
  return {
      type: IncrementActionsTypes.DECREMENT,
      count: 1
    }
  }

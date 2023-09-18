import { IncrementActionsTypes, TCountAction, TState } from "../types/incrementTypes";

const initialState: TState = {
  count: 0,
}

export const incrementReducer = (state = initialState, action: TCountAction) : TState => {
  switch (action.type) {
    case IncrementActionsTypes.INCREMENT:
      return  {...state, count: state.count + action.count}
    case IncrementActionsTypes.DECREMENT:
      return  {...state, count: state.count - action.count}
    default:
      return state;
  }

}

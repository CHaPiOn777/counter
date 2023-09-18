export type TState = {
  count: number
};

export enum IncrementActionsTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

type TIncrementActions = {
  type: IncrementActionsTypes.INCREMENT,
  count: number
}
type TDecrementActions = {
  type: IncrementActionsTypes.DECREMENT,
  count: number
}

export type TCountAction = TIncrementActions | TDecrementActions
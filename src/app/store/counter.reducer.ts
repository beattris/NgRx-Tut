import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.action';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1)
);

// BELOW IS AN ALTERNATIVE WAY OF CREATING A REDUCER

// export function counterReducer(state = initialState) {
//   return state;
// }
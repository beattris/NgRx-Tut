import { Action, createReducer, on,  } from '@ngrx/store';
import { increment } from './counter.action';
// import { CounterActions, INCREMENT, IncrementAction  } from './counter.action';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value)
);

// BELOW IS AN ALTERNATIVE WAY OF CREATING A REDUCER

// export function counterReducer(state = initialState, action: CounterActions | Action) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }

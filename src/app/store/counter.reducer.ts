import { createReducer } from '@ngrx/store';

const initialState = 0;

export const counterReducer = createReducer(initialState);

// BELOW IS AN ALTERNATIVE WAY OF CREATING A REDUCER 

// export function counterReducer(state = initialState) {
//   return state;
// }

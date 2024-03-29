import { createAction, props } from "@ngrx/store";

export const init = createAction(
    '[Counter] Init',
);

export const set = createAction(
    '[Counter] Set',
    props<{value: number}>()
);

export const increment = createAction(
    '[Counter] Increment',
    props<{value: number}>()
);

export const decrement = createAction(
    '[Counter] Decrement',
    props<{value: number}>()
);

// BELOW IS AN ALTERNATIVE WAY OF IMPLEMENTING AN ACTION
// export const INCREMENT = '[Counter] Increment';

// export class IncrementAction implements Action {
//     readonly type = INCREMENT;

//     constructor (public value: number){}
// }

//  CREATING A GROUPED TYPE FOR OUR ACTIONS

// export type CounterActions = IncrementAction;
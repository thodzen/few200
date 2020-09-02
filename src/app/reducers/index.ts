import { createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import * as fromUiHints from './ui-hints.reducer';

// Describe, for TYPESCRIPT what the application state looks like

export interface AppState {
  counter: fromCounter.CounterState;
  uiHints: fromUiHints.UiHintsState;

}

// Creat an onject which points to the reducer functions that maintain the state

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer,
  uiHints: fromUiHints.reducer
};

// Selector Functions

// 1. Create a feature selector (if you are in a feature. We aren't. We will later.)

// 2. Create a selector per "branch" of your application state.
const selectCounterBranch = (state: AppState) => state.counter;
const selectUiHintsBranch = (state: AppState) => state.uiHints;

// 3. Create any "helper" selectors you might need (optional)

// 4. Create a selector that returns specifically the data the component needs.

export const selectHasError = createSelector(
  selectUiHintsBranch,
  b => b.hasError
);

export const selectError = createSelector(
  selectUiHintsBranch,
  b => b.error
);

export const selectCurrentCount = createSelector(
  selectCounterBranch,
  b => b.current
);

// todo: need one that returns what we are counting by
export const selectCountingBy = createSelector(
  selectCounterBranch,
  b => b.by
);

// todo: need one that tells us if we are zero
export const selectAtZero = createSelector(
  selectCurrentCount,
  c => c === 0
);

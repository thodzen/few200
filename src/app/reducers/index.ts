import * as fromCounter from './counter.reducer';

// Describe, for TYPESCRIPT what the application state looks like

export interface AppState {
  counter: fromCounter.CounterState;

}

// Creat an onject which points to the reducer functions that maintain the state

export const reducers = {
  counter: fromCounter.reducer
};

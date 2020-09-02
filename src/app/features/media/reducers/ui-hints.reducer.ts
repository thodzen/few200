import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/ui-hints.actions';
import * as mediaActions from '../actions/list.actions';

export interface UiHintState {
  listSort: string;
  mediaLoaded: boolean;
}

const initialState: UiHintState = {
  listSort: 'All',
  mediaLoaded: false
};

const reducerFunction = createReducer(
  initialState,
  on(actions.mediaFilterSet, (s, a) => ({ ...s, listSort: a.by })),
  on(mediaActions.loadMediaData, mediaActions.loadMediaDataFailed, (s) => ({ ...s, mediaLoaded: false })),
  on(mediaActions.loadMediaDataSucceeded, (s) => ({ ...s, mediaLoaded: true }))
);

export function reducer(state: UiHintState, action: Action): UiHintState {
  return reducerFunction(state, action);
}

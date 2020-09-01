import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';
import * as applicationActions from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  // DEMO - just log every action that comes by to the console, and then do NOTHING
  // logIt$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(a.type))
  //   ), { dispatch: false }
  // );



  // when a countBySet floats by, we are going to write the value to localStore. Then do NOTHING

  storeCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );

  // when there is an applicationStarted, check localstorage for by.
  // -- if it is there, dispatch a countBySet
  // -- if it isn't, do nothing.
  readCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationActions.applicationStarted),
      map(() => localStorage.getItem('by')), // null || '1' | '3' | '5'
      filter(by => by !== null), // '1' | '3' | '5'
      map(by => parseInt(by, 10)), // 1 | 3 | 5
      map(by => counterActions.countBySet({ by })) // is sent to the reducer
    )
  );

  constructor(private actions$: Actions) { }
}

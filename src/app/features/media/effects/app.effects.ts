import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as appActions from '../../../actions/app.actions';
import * as mediaActions from '../actions/list.actions';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class MediaAppEffects {

  removeItemFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mediaActions.removedMediaItemFailed),
      map((a) => appActions.applicationFeatureError({
        errorMessage: a.message,
        featureName: 'Media'
      }))
    ));

  // if we get an addedMediaFailure -> applicationFeatureError
  displayMediaAndError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(mediaActions.addedMediaFailure),
      map((a) => appActions.applicationFeatureError({ errorMessage: a.errorMessage, featureName: 'Media' }))
    ));

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => mediaActions.loadMediaData())
    )
  );
  constructor(private actions$: Actions) { }
}

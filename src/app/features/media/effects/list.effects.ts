import { Actions, ofType, createEffect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as actions from '../actions/list.actions';
import { environment } from '../../../../environments/environment'; // ALWAYS IMPORT THIS ONE! ANGUALR WILL FIGURE OUT THEENVIRONMENT TO USE
import { Injectable } from '@angular/core';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { of, pipe } from 'rxjs';
import { ListEntity } from '../reducers/list.reducer';

@Injectable()
export class ListEffects {

  // we we get a mediaItemRemoved -> send it to the api -> (nothing! | mediaItemRemovedFailure)
  removeItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.removedMediaItem),
      switchMap((item) => this.client.delete(environment.apiUrl + `media/${item.payload.id}`)
        .pipe(
          filter(() => false),
          map(() => ({ type: 'noop' })),
          catchError((e) => of(actions.removedMediaItemFailed({
            payload: item.payload
            , message: `Failed To Delete ${item.payload.title} `
          }))),
        )
      )
    )
  );

  // When we get a mediaItemAdded -> send it to the API -> (mediaItemAddedSuccess | mediaItemAddedFailure)

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.addedMediaItem),
      switchMap((originalAction) => this.client.post<ListEntity>(environment.apiUrl + 'media', {
        title: originalAction.payload.title,
        format: originalAction.payload.format,
        recommendedBy: originalAction.payload.recommendedBy
      }).pipe(
        map(payload => actions.addedMediaItemSucceeded({ payload, tempId: originalAction.payload.id })),
        catchError(() => of(actions.addedMediaFailure({ payload: originalAction.payload, errorMessage: `Could Not Add ${originalAction.payload.title}` })))
      ))
    ), { dispatch: true }
  );

  // When we get a loadListData -> go to the API -> (loadListDataSucceeded | loadListDataFailed)
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadMediaData),
      switchMap(() => this.client.get<{ data: ListEntity[] }>(environment.apiUrl + 'media')
        .pipe(
          map(response => actions.loadMediaDataSucceeded({ payload: response.data })),
          catchError(() => of(actions.loadMediaDataFailed({ message: 'Something went wrong with the API. Bummer' })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}

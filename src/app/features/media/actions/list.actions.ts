import { createAction, props } from '@ngrx/store';
import { ListEntity } from '../reducers/list.reducer';

let currentId = 0;

export const addedMediaItem = createAction(
  '[media] media item added',
  ({ title, format, recommendedBy }: { title: string, format: string, recommendedBy: string }) => ({
    payload: {
      title, format, recommendedBy,
      id: 'TEMP' + currentId++
    } as ListEntity
  })
);

export const addedMediaItemSucceeded = createAction(
  '[media] added media item succeeded',
  props<{ tempId: string, payload: ListEntity }>()
);

export const addedMediaFailure = createAction(
  '[media] added media item failed',
  props<{ payload: ListEntity, errorMessage: string }>()
);

export const loadMediaData = createAction(
  '[media] load media data'
);

export const loadMediaDataSucceeded = createAction(
  '[media] loading media data succeeded',
  props<{ payload: ListEntity[] }>()
);

export const loadMediaDataFailed = createAction(
  '[media] loading media data failed',
  props<{ message: string }>()
);

export const removedMediaItem = createAction(
  '[media] media item removed',
  props<{ payload: ListEntity }>()
);

export const removedMediaItemFailed = createAction(
  '[media] media item removed failed',
  props<{ payload: ListEntity, message: string }>()
);

export const makeUpperCaseTitle = createAction(
  '[media] make upper case title',
  props<{ payload: ListEntity }>()
);

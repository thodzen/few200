import { createAction, props } from '@ngrx/store';
import { GiftsEntity } from '../reducers/gifts.reducers';

let currentId = 0;

export const addedGiftsItem = createAction(
  '[gifts] recipient added',
  ({ name, upcomingHoliday, dateOfHoliday, needsCard, needsGift }: RecipientCreate) => ({
    payload: {
      name, upcomingHoliday, dateOfHoliday, needsCard, needsGift,
      id: 'TEMP' + currentId++
    } as GiftsEntity
  })
);

interface RecipientCreate {
  name: string;
  upcomingHoliday: string;
  dateOfHoliday: Date;
  needsCard: boolean;
  needsGift: boolean;
}

export const addedGiftsItemSucceeded = createAction(
  '[gifts] added gifts item succeeded',
  props<{ tempId: string, payload: GiftsEntity }>()
);

export const addedGiftsItemFailure = createAction(
  '[gifts] added gifts item failed',
  props<{ payload: GiftsEntity, errorMessage: string }>()
);

export const loadGiftsItemData = createAction(
  '[gifts] load gifts data'
);

export const loadGiftsItemDataSucceeded = createAction(
  '[gifts] loading gifts data succeeded',
  props<{ payload: GiftsEntity[] }>()
);

export const toggleHasGift = createAction(
  '[gifts] toggle has gift',
  props<{ payload: GiftsEntity }>()
);

export const toggleHasCard = createAction(
  '[gifts] toggle has card',
  props<{ payload: GiftsEntity }>()
);

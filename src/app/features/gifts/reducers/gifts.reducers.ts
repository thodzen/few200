import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/gift.actions';

export interface GiftsEntity {
  id: string;
  name: string;
  upcomingHoliday: string;
  dateOfHoliday: Date;
  needsGift: boolean;
  needsCard: boolean;
  hasGift: boolean;
  hasCard: boolean;
}

export interface GiftsState extends EntityState<GiftsEntity> {

}

export const adapter = createEntityAdapter<GiftsEntity>();

const initialState: GiftsState = {
  ids: ['1', '2', '3'],
  entities: {
    1: { id: '1', name: 'Tyler Hodzen', upcomingHoliday: 'Halloween', dateOfHoliday: new Date(2020, 10, 31), needsCard: true, needsGift: true, hasCard: false, hasGift: false },
    2: { id: '2', name: 'Mitchell Hodzen', upcomingHoliday: 'Christmas', dateOfHoliday: new Date(2019, 12, 25), needsCard: false, needsGift: true, hasCard: false, hasGift: true },
    3: { id: '3', name: 'Everyone', upcomingHoliday: 'Cyberpunk 2077 Release', dateOfHoliday: new Date(2020, 11, 19), needsCard: false, needsGift: true, hasCard: false, hasGift: false },
  }
};

const reducerFunction = createReducer(
  initialState,
  on(actions.toggleHasCard, (s, a) => adapter.updateOne({ id: a.payload.id, changes: { hasCard: !a.payload.hasCard } }, s)),
  on(actions.toggleHasGift, (s, a) => adapter.updateOne({ id: a.payload.id, changes: { hasGift: !a.payload.hasGift } }, s)),
  on(actions.addedGiftsItem, (s, a) => adapter.addOne(a.payload, s))
);

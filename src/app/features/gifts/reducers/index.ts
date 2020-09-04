import { ActionReducerMap, createSelector, createFeatureSelector, select } from '@ngrx/store';
import * as fromRecipients from './gifts.reducers';
import * as models from '../models';
import { FormsModule } from '@angular/forms';
import { removedMediaItemFailed } from '../../media/actions/list.actions';
import { RhsComponent } from 'src/app/components/communications/rhs/rhs.component';

export const featureName = 'giftFeature';

export interface GiftsState {
  recipients: fromRecipients.RecipientState;
}

export const reducers: ActionReducerMap<GiftsState> = {
  recipients: fromRecipients.reducer
};

const selectFeature = createFeatureSelector<GiftsState>(featureName);

const selectRecipientBranch = createSelector(
  selectFeature,
  f => f.recipients
);

const { selectAll: selectAllRecipients } = fromRecipients.adapter.getSelectors(selectRecipientBranch);

export const selectSortedRecipients = createSelector(
  selectAllRecipients,
  (r) => [...r.sort((lhs: fromRecipients.GiftsEntity, rhs: fromRecipients.GiftsEntity) => {
    if (lhs.dateOfHoliday < rhs.dateOfHoliday) {
      return -1;
    }
    if (lhs.dateOfHoliday > rhs.dateOfHoliday) {
      return 1;
    }
    return 0;

  })] as models.GiftItem[]
);

export const selectUpcomingRecipients = createSelector(
  selectSortedRecipients,
  r => r.filter(x => x.dateOfHoliday >= new Date())
);

export const selectPastRecipients = createSelector(
  selectSortedRecipients,
  r => r.filter(x => x.dateOfHoliday < new Date())
);

export const selectDashboardModel = createSelector(
  selectUpcomingRecipients,
  r => {
    return {
      numberOfUpcomingHolidays: r.length,
      numberOfCardsToBuy: r.filter(x => x.needsCard && !x.hasCard).length,
      numberOfGiftsToBuy: r.filter(x => x.needsGift && !x.hasGift).length
    } as models.DashboardSummary;
  }
);

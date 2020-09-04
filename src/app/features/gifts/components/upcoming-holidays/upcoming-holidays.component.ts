import { Component, OnInit, Input } from '@angular/core';
import { GiftItem } from '../../models';
import { GiftsEntity } from '../../reducers/gifts.reducers';
import { Store } from '@ngrx/store';
import { GiftsState } from '../../reducers';
import * as actions from '../../actions/gift.actions';

@Component({
  selector: 'app-upcoming-holidays',
  templateUrl: './upcoming-holidays.component.html',
  styleUrls: ['./upcoming-holidays.component.scss']
})
export class UpcomingHolidaysComponent implements OnInit {

  @Input() recipients: GiftItem[] = [];
  constructor(private store: Store<GiftsState>) { }

  ngOnInit(): void {
  }

  toggleGift(payload: GiftsEntity): void {
    this.store.dispatch(actions.toggleHasGift({ payload }));
  }

  toggleCard(payload: GiftsEntity): void {
    this.store.dispatch(actions.toggleHasCard({ payload }));
  }

}

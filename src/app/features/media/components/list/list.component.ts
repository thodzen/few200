import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaListItem } from '../../models';
import { Store, select } from '@ngrx/store';
import { MediaState } from '../../reducers/list.reducer';
import { selectMediaList } from '../../reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // style list will apply to its children
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  items$: Observable<MediaListItem[]>;

  constructor(private store: Store<MediaState>) { }

  ngOnInit(): void {
    this.items$ = this.store.pipe(
      select(selectMediaList)
    );
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { GiftItem } from '../../models';

@Component({
  selector: 'app-upcoming-holidays',
  templateUrl: './upcoming-holidays.component.html',
  styleUrls: ['./upcoming-holidays.component.scss']
})
export class UpcomingHolidaysComponent implements OnInit {
  constructor() { }

  // @Input() items: GiftItem[] = [];

  items = [
    { name: 'Test', holiday: 'Birthday', date: new Date() }
  ];

  ngOnInit(): void {
  }

}

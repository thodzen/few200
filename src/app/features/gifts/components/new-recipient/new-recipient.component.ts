import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import * as actions from '../../actions/gift.actions';
import { Store } from '@ngrx/store';
import { GiftsState } from '../../reducers/gifts.reducers';
import { GiftsEntity } from '../../reducers/gifts.reducers';

@Component({
  selector: 'app-new-recipient',
  templateUrl: './new-recipient.component.html',
  styleUrls: ['./new-recipient.component.scss']
})
export class NewRecipientComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<GiftsState>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      upcomingHoliday: ['', [Validators.required]],
      dateOfHoliday: ['', [Validators.required]],
      needsCard: [true, []],
      needsGift: [true, []]
    });
  }

  get name(): AbstractControl { return this.form.get('name'); }
  get upcomingHoliday(): AbstractControl { return this.form.get('upcomingHoliday'); }
  get dateOfHoliday(): AbstractControl { return this.form.get('dateOfHoliday'); }

  submit(): void {
    console.log(this.form.value);
    const valueToAdd = {
      name: this.form.get('name').value,
      upcomingHoliday: this.form.get('upcomingHoliday').value,
      dateOfHoliday: new Date(this.form.get('dateOfHoliday').value),
      needsGift: this.form.get('needsGift').value,
      needsCard: this.form.get('needsCard').value
    };
    this.store.dispatch(actions.addedGiftsItem({ ...valueToAdd }));
    this.form.reset();
  }
}

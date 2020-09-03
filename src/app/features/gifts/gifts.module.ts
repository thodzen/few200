import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsComponent } from './gifts.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'dashboard'
  },
  {
    path: 'upcomingHolidays'
  },
  {
    path: 'newRecipient'
  },
  {
    path: 'pastHolidays'
  }
];

@NgModule({
  declarations: [GiftsComponent],
  imports: [
    CommonModule
  ]
})
export class GiftsModule { }

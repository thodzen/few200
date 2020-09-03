import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsComponent } from './gifts.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpcomingHolidaysComponent } from './components/upcoming-holidays/upcoming-holidays.component';
import { NewRecipientComponent } from './components/new-recipient/new-recipient.component';
import { PastHolidaysComponent } from './components/past-holidays/past-holidays.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'gifts',
    component: GiftsComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'upcomingHolidays',
        component: UpcomingHolidaysComponent
      },
      {
        path: 'newRecipient',
        component: NewRecipientComponent
      },
      {
        path: 'pastHolidays',
        component: PastHolidaysComponent
      }
    ]
  }
];

@NgModule({
  declarations: [GiftsComponent, DashboardComponent, UpcomingHolidaysComponent, NewRecipientComponent, PastHolidaysComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class GiftsModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingHolidaysComponent } from './upcoming-holidays.component';

describe('UpcomingHolidaysComponent', () => {
  let component: UpcomingHolidaysComponent;
  let fixture: ComponentFixture<UpcomingHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastHolidaysComponent } from './past-holidays.component';

describe('PastHolidaysComponent', () => {
  let component: PastHolidaysComponent;
  let fixture: ComponentFixture<PastHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

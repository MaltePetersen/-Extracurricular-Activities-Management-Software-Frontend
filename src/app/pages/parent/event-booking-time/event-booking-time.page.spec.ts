import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingTimePage as EventBookingTimePage } from './event-booking-time.page';

describe('EventBookingTimePage', () => {
  let component: EventBookingTimePage;
  let fixture: ComponentFixture<EventBookingTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBookingTimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBookingTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

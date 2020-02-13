import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingPage } from './event-booking.page';

describe('EventBookingPage', () => {
  let component: EventBookingPage;
  let fixture: ComponentFixture<EventBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBookingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

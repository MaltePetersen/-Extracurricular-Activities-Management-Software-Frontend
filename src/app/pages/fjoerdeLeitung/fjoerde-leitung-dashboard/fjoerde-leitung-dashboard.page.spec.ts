import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FjoerdeLeitungDashboardPage } from './fjoerde-leitung-dashboard.page';

describe('FjoerdeLeitungDashboardPage', () => {
  let component: FjoerdeLeitungDashboardPage;
  let fixture: ComponentFixture<FjoerdeLeitungDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FjoerdeLeitungDashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FjoerdeLeitungDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

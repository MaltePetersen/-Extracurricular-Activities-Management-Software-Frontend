import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErziehungsberechtigteDashboardPage } from './erziehungsberechtigte-dashboard.page';

describe('ErziehungsberechtigteDashboardPage', () => {
  let component: ErziehungsberechtigteDashboardPage;
  let fixture: ComponentFixture<ErziehungsberechtigteDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErziehungsberechtigteDashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErziehungsberechtigteDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

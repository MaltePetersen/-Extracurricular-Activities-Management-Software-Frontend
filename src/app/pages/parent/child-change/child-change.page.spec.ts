import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChangePage } from './child-change.page';

describe('ChildChangePage', () => {
  let component: ChildChangePage;
  let fixture: ComponentFixture<ChildChangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildChangePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

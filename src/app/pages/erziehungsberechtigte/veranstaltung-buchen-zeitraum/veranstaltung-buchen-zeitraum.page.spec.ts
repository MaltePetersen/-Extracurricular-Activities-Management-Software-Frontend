import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeranstaltungBuchenZeitraumPage } from './veranstaltung-buchen-zeitraum.page';

describe('VeranstaltungBuchenZeitraumPage', () => {
  let component: VeranstaltungBuchenZeitraumPage;
  let fixture: ComponentFixture<VeranstaltungBuchenZeitraumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeranstaltungBuchenZeitraumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeranstaltungBuchenZeitraumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

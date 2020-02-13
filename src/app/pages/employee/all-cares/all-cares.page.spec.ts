import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCaresPage } from './all-cares.page';

describe('AllCaresPage', () => {
  let component: AllCaresPage;
  let fixture: ComponentFixture<AllCaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCaresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

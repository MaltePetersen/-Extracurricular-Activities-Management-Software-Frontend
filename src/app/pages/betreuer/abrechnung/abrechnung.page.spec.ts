import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrechnungPage } from './abrechnung.page';

describe('AbrechnungPage', () => {
  let component: AbrechnungPage;
  let fixture: ComponentFixture<AbrechnungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbrechnungPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrechnungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

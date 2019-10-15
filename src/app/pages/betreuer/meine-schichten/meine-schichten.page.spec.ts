import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineSchichtenPage } from './meine-schichten.page';

describe('MeineSchichtenPage', () => {
  let component: MeineSchichtenPage;
  let fixture: ComponentFixture<MeineSchichtenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeineSchichtenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeineSchichtenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

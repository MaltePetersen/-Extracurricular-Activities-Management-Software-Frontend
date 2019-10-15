import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleSchichtenPage } from './alle-schichten.page';

describe('AlleSchichtenPage', () => {
  let component: AlleSchichtenPage;
  let fixture: ComponentFixture<AlleSchichtenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlleSchichtenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleSchichtenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

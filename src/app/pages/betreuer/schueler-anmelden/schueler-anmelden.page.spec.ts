import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchuelerAnmeldenPage } from './schueler-anmelden.page';

describe('SchuelerAnmeldenPage', () => {
  let component: SchuelerAnmeldenPage;
  let fixture: ComponentFixture<SchuelerAnmeldenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchuelerAnmeldenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchuelerAnmeldenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

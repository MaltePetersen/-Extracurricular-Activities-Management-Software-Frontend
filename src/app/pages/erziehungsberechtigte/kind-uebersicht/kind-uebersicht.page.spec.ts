import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindUebersichtPage } from './kind-uebersicht.page';

describe('KindUebersichtPage', () => {
  let component: KindUebersichtPage;
  let fixture: ComponentFixture<KindUebersichtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindUebersichtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindUebersichtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

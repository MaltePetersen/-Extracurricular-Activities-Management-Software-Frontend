import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindBearbeitenPage } from './kind-bearbeiten.page';

describe('KindBearbeitenPage', () => {
  let component: KindBearbeitenPage;
  let fixture: ComponentFixture<KindBearbeitenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindBearbeitenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindBearbeitenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

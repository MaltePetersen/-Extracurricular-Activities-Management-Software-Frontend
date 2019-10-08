import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindHinzufuegenPage } from './kind-hinzufuegen.page';

describe('KindHinzufuegenPage', () => {
  let component: KindHinzufuegenPage;
  let fixture: ComponentFixture<KindHinzufuegenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindHinzufuegenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindHinzufuegenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

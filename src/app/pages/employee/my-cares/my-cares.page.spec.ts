import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCaresPage } from './my-cares.page';

describe('MyCaresPage', () => {
  let component: MyCaresPage;
  let fixture: ComponentFixture<MyCaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCaresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

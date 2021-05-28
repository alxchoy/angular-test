import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlertComponent } from './modalAlert.component';

describe('ModalAlertComponent', () => {
  let component: ModalAlertComponent;
  let fixture: ComponentFixture<ModalAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAlertComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAlertComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    const modalAlertComponent = fixture.debugElement.componentInstance;
    expect(modalAlertComponent).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputDateComponent } from './custom-input-date.component';

describe('CustomInputDateComponent', () => {
  let component: CustomInputDateComponent;
  let fixture: ComponentFixture<CustomInputDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomInputDateComponent]
    });
    fixture = TestBed.createComponent(CustomInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

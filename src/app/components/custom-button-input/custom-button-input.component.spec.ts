import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonInputComponent } from './custom-button-input.component';

describe('CustomButtonInputComponent', () => {
  let component: CustomButtonInputComponent;
  let fixture: ComponentFixture<CustomButtonInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomButtonInputComponent]
    });
    fixture = TestBed.createComponent(CustomButtonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

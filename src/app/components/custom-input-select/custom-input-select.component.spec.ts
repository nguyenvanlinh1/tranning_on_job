import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputSelectComponent } from './custom-input-select.component';

describe('CustomInputSelectComponent', () => {
  let component: CustomInputSelectComponent;
  let fixture: ComponentFixture<CustomInputSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomInputSelectComponent]
    });
    fixture = TestBed.createComponent(CustomInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenceProcessComponent } from './difference-process.component';

describe('DifferenceProcessComponent', () => {
  let component: DifferenceProcessComponent;
  let fixture: ComponentFixture<DifferenceProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifferenceProcessComponent]
    });
    fixture = TestBed.createComponent(DifferenceProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

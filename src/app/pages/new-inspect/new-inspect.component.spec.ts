import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInspectComponent } from './new-inspect.component';

describe('NewInspectComponent', () => {
  let component: NewInspectComponent;
  let fixture: ComponentFixture<NewInspectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewInspectComponent]
    });
    fixture = TestBed.createComponent(NewInspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

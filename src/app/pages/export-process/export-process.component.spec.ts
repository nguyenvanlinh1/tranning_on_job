import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportProcessComponent } from './export-process.component';

describe('ExportProcessComponent', () => {
  let component: ExportProcessComponent;
  let fixture: ComponentFixture<ExportProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportProcessComponent]
    });
    fixture = TestBed.createComponent(ExportProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

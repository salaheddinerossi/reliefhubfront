import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeInputComponent } from './large-input.component';

describe('LargeInputComponent', () => {
  let component: LargeInputComponent;
  let fixture: ComponentFixture<LargeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargeInputComponent]
    });
    fixture = TestBed.createComponent(LargeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

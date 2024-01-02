import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSelectInputComponent } from './green-select-input.component';

describe('GreenSelectInputComponent', () => {
  let component: GreenSelectInputComponent;
  let fixture: ComponentFixture<GreenSelectInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenSelectInputComponent]
    });
    fixture = TestBed.createComponent(GreenSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeSubmiteButtonComponent } from './large-submite-button.component';

describe('LargeSubmiteButtonComponent', () => {
  let component: LargeSubmiteButtonComponent;
  let fixture: ComponentFixture<LargeSubmiteButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargeSubmiteButtonComponent]
    });
    fixture = TestBed.createComponent(LargeSubmiteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

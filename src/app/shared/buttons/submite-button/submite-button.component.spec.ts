import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmiteButtonComponent } from './submite-button.component';

describe('SubmiteButtonComponent', () => {
  let component: SubmiteButtonComponent;
  let fixture: ComponentFixture<SubmiteButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmiteButtonComponent]
    });
    fixture = TestBed.createComponent(SubmiteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

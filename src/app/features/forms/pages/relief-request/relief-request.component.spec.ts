import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefRequestComponent } from './relief-request.component';

describe('ReliefRequestComponent', () => {
  let component: ReliefRequestComponent;
  let fixture: ComponentFixture<ReliefRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReliefRequestComponent]
    });
    fixture = TestBed.createComponent(ReliefRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

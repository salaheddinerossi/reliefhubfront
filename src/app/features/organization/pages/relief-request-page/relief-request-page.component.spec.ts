import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefRequestPageComponent } from './relief-request-page.component';

describe('ReliefRequestPageComponent', () => {
  let component: ReliefRequestPageComponent;
  let fixture: ComponentFixture<ReliefRequestPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReliefRequestPageComponent]
    });
    fixture = TestBed.createComponent(ReliefRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

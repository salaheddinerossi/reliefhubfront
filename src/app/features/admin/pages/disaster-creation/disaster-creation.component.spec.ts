import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterCreationComponent } from './disaster-creation.component';

describe('DisasterCreationComponent', () => {
  let component: DisasterCreationComponent;
  let fixture: ComponentFixture<DisasterCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisasterCreationComponent]
    });
    fixture = TestBed.createComponent(DisasterCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementActionsComponent } from './announcement-actions.component';

describe('AnnouncementActionsComponent', () => {
  let component: AnnouncementActionsComponent;
  let fixture: ComponentFixture<AnnouncementActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementActionsComponent]
    });
    fixture = TestBed.createComponent(AnnouncementActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

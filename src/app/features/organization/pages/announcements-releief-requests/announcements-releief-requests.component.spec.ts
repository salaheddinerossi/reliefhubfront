import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsReleiefRequestsComponent } from './announcements-releief-requests.component';

describe('AnnouncementsReleiefRequestsComponent', () => {
  let component: AnnouncementsReleiefRequestsComponent;
  let fixture: ComponentFixture<AnnouncementsReleiefRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementsReleiefRequestsComponent]
    });
    fixture = TestBed.createComponent(AnnouncementsReleiefRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

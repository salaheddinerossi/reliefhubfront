import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsDisasterComponent } from './announcements-disaster.component';

describe('AnnouncementsDisasterComponent', () => {
  let component: AnnouncementsDisasterComponent;
  let fixture: ComponentFixture<AnnouncementsDisasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementsDisasterComponent]
    });
    fixture = TestBed.createComponent(AnnouncementsDisasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

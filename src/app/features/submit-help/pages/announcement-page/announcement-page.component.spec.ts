import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementPageComponent } from './announcement-page.component';

describe('AnnouncementPageComponent', () => {
  let component: AnnouncementPageComponent;
  let fixture: ComponentFixture<AnnouncementPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementPageComponent]
    });
    fixture = TestBed.createComponent(AnnouncementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationAnnouncementsComponent } from './organization-announcements.component';

describe('OrganizationAnnouncementsComponent', () => {
  let component: OrganizationAnnouncementsComponent;
  let fixture: ComponentFixture<OrganizationAnnouncementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationAnnouncementsComponent]
    });
    fixture = TestBed.createComponent(OrganizationAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOrganizationComponent } from './home-organization.component';

describe('HomeOrganizationComponent', () => {
  let component: HomeOrganizationComponent;
  let fixture: ComponentFixture<HomeOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeOrganizationComponent]
    });
    fixture = TestBed.createComponent(HomeOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

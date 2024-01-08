import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeclarationComponent } from './admin-declaration.component';

describe('AdminDeclarationComponent', () => {
  let component: AdminDeclarationComponent;
  let fixture: ComponentFixture<AdminDeclarationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDeclarationComponent]
    });
    fixture = TestBed.createComponent(AdminDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTextComponent } from './zone-text.component';

describe('ZoneTextComponent', () => {
  let component: ZoneTextComponent;
  let fixture: ComponentFixture<ZoneTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoneTextComponent]
    });
    fixture = TestBed.createComponent(ZoneTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DisaterServiceService } from './disater-service.service';

describe('DisaterServiceService', () => {
  let service: DisaterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisaterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HelpFormService } from './help-form.service';

describe('HelpFormService', () => {
  let service: HelpFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

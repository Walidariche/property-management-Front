import { TestBed } from '@angular/core/testing';

import { HebergementServiceService } from './hebergement-service.service';

describe('HebergementServiceService', () => {
  let service: HebergementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HebergementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

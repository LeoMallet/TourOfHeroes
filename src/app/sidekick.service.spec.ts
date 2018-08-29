import { TestBed, inject } from '@angular/core/testing';

import { SidekickService } from './sidekick.service';

describe('SidekickService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidekickService]
    });
  });

  it('should be created', inject([SidekickService], (service: SidekickService) => {
    expect(service).toBeTruthy();
  }));
});

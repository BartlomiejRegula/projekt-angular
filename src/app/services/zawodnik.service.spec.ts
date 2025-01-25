import { TestBed } from '@angular/core/testing';

import { ZawodnikService } from './zawodnik.service';

describe('ZawodnikService', () => {
  let service: ZawodnikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZawodnikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

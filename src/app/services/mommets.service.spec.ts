import { TestBed } from '@angular/core/testing';

import { MommetsService } from './mommets.service';

describe('MommetsService', () => {
  let service: MommetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MommetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ForTableService } from './for-table.service';

describe('ForTableService', () => {
  let service: ForTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

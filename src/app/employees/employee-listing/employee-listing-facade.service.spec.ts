import { TestBed } from '@angular/core/testing';

import { EmployeeListingFacadeService } from './employee-listing-facade.service';

describe('EmployeeListingFacadeService', () => {
  let service: EmployeeListingFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeListingFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

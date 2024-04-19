import { TestBed } from '@angular/core/testing';

import { EmployeeDataProviderService } from './employee-data-provider.service';

describe('EmployeeDataProviderService', () => {
  let service: EmployeeDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ViewServiceService } from './view-service.service';

describe('ViewServiceService', () => {
  let service: ViewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

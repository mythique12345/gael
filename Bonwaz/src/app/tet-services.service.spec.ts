import { TestBed } from '@angular/core/testing';

import { TetServicesService } from './tet-services.service';

describe('TetServicesService', () => {
  let service: TetServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TetServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InscrimenuService } from './inscri-menu.service';

describe('InscriMenuService', () => {
  let service: InscrimenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscrimenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

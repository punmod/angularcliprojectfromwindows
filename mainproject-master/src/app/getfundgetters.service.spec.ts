import { TestBed, inject } from '@angular/core/testing';

import { GetfundgettersService } from './getfundgetters.service';

describe('GetfundgettersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetfundgettersService]
    });
  });

  it('should be created', inject([GetfundgettersService], (service: GetfundgettersService) => {
    expect(service).toBeTruthy();
  }));
});

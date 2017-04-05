import { TestBed, inject } from '@angular/core/testing';

import { SearchCanditatesService } from './search-canditates.service';

describe('SearchCanditatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchCanditatesService]
    });
  });

  it('should ...', inject([SearchCanditatesService], (service: SearchCanditatesService) => {
    expect(service).toBeTruthy();
  }));
});

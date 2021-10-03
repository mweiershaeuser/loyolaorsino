import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MemoriesService } from './memories.service';

describe('MemoriesService', () => {
  let service: MemoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MemoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

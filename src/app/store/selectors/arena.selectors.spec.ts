import { TestBed } from '@angular/core/testing';

import { ArenaSelectors } from './arena.selectors';

describe('ArenaSelectorsService', () => {
  let service: ArenaSelectors;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArenaSelectors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

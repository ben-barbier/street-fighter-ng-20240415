import { TestBed } from '@angular/core/testing';

import { CharactersSelectors } from './characters-selectors.service';

describe('CharactersService', () => {
  let service: CharactersSelectors;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersSelectors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

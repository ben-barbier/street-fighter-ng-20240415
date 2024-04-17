import { TestBed } from '@angular/core/testing';

import { CharactersDispatchers } from './characters.dispatchers';

describe('CharactersService', () => {
  let service: CharactersDispatchers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersDispatchers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

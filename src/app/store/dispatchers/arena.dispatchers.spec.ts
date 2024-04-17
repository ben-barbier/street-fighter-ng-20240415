import { TestBed } from '@angular/core/testing';

import { ArenaDispatchers } from './arena.dispatchers';

describe('ArenaDispatchersService', () => {
  let service: ArenaDispatchers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArenaDispatchers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

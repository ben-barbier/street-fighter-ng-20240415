import { inject, Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Arena, ArenaStore } from '../reducers/arena.reducer';
import { selectCharacters } from './characters.selectors';

// selectors
const selectArenaStore = createFeatureSelector<ArenaStore>('arena');
const selectArena = createSelector(selectArenaStore, selectCharacters, (arena, characters): Arena => {
  return {
    character1: characters.find((c) => c.id === arena.character1) ?? null,
    character2: characters.find((c) => c.id === arena.character2) ?? null,
    winner: characters.find((c) => c.id === arena.winner) ?? null,
  };
});

@Injectable({
  providedIn: 'root',
})
export class ArenaSelectors {
  private store = inject(Store);

  public arena$ = this.store.select(selectArena);
}

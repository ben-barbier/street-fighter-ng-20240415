import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { arenaActions } from '../actions/arena.actions';

@Injectable({
  providedIn: 'root',
})
export class ArenaDispatchers {
  private store = inject(Store);

  public addCharacterToArena(id: string) {
    this.store.dispatch(arenaActions.addCharacterToArena({ id }));
  }

  public removeCharacterFromArena(id: string) {
    this.store.dispatch(arenaActions.removeCharacterFromArena({ id }));
  }

  public fight() {
    this.store.dispatch(arenaActions.fight());
  }
}

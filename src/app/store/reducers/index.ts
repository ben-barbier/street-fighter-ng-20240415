import { CharacterDTO } from '../../shared/models/character.model';
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { charactersReducer } from './characters.reducer';
import { arenaReducer, ArenaStore } from './arena.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface EntityState {
  characters: CharacterDTO[];
  arena: ArenaStore; // Identifiants des characters
}

export const reducers: ActionReducerMap<EntityState> = {
  characters: charactersReducer,
  arena: arenaReducer,
};

const localStorageSyncReducer = (reducer: ActionReducer<EntityState>): ActionReducer<EntityState> => {
  return localStorageSync({ keys: ['characters', 'arena'], rehydrate: true })(reducer);
};

export const metaReducers: MetaReducer<EntityState, Action>[] = [localStorageSyncReducer];

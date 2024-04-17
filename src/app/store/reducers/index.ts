import { CharacterDTO } from '../../shared/models/character.model';
import { ActionReducerMap } from '@ngrx/store';
import { charactersReducer } from './characters.reducer';
import { arenaReducer, ArenaStore } from './arena.reducer';

export interface EntityState {
  characters: CharacterDTO[];
  arena: ArenaStore; // Identifiants des characters
}

export const reducers: ActionReducerMap<EntityState> = {
  characters: charactersReducer,
  arena: arenaReducer,
};

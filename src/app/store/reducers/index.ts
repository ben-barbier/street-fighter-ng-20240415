import { CharacterDTO } from '../../shared/models/character.model';
import { ActionReducerMap } from '@ngrx/store';
import { charactersReducer } from './characters.reducer';

export interface EntityState {
  characters: CharacterDTO[];
  // arena: number[]; // Identifiants des characters
}

export const reducers: ActionReducerMap<EntityState> = {
  characters: charactersReducer,
};

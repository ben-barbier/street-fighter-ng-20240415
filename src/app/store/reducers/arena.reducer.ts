import { createReducer, on } from '@ngrx/store';
import { arenaActions } from '../actions/arena.actions';
import { CharacterDTO } from '../../shared/models/character.model';

export interface ArenaStore {
  character1: string | null; // ID of character
  character2: string | null; // ID of character
  winner: string | null; // ID of character
}

export interface Arena {
  character1: CharacterDTO | null;
  character2: CharacterDTO | null;
  winner: CharacterDTO | null;
}

const initialState: ArenaStore = {
  character1: null,
  character2: null,
  winner: null,
};

export const arenaReducer = createReducer(
  initialState,
  on(arenaActions.addCharacterToArena, (state, { id }): ArenaStore => {
    if (!state.character1) {
      return { ...state, character1: id };
    }
    if (!state.character2) {
      return { ...state, character2: id };
    }
    return state;
  }),
  on(arenaActions.removeCharacterFromArena, (state, { id }): ArenaStore => {
    if (state.character1 === id) {
      return { ...state, character1: null };
    }
    if (state.character2 === id) {
      return { ...state, character2: null };
    }
    return state;
  }),
  on(arenaActions.fightSuccess, (state, { winner }): ArenaStore => {
    return { ...state, winner };
  }),
);

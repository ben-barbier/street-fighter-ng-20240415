import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CharacterDTO } from '../../shared/models/character.model';

export const arenaActions = createActionGroup({
  source: 'Arena',
  events: {
    'add character to arena': props<{ id: string }>(),
    'remove character from arena': props<{ id: string }>(),

    fight: emptyProps(),
    'fight success': props<{ winner: string }>(),
    'fight error': props<{ error: string }>(),
  },
});

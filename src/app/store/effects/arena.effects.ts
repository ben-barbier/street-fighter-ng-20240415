import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharactersService } from '../../shared/services/characters.service';
import { arenaActions } from '../actions/arena.actions';
import { ArenaSelectors } from '../selectors/arena.selectors';
import { catchError, of, switchMap, withLatestFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ArenaEffects {
  private actions$ = inject(Actions);
  private charactersService = inject(CharactersService);
  private arenaSelector = inject(ArenaSelectors);

  fight$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(arenaActions.fight),
      withLatestFrom(this.arenaSelector.arena$),
      switchMap(([, arena]) => {
        // TODO: gérer le cas de l'absence de combatants
        return this.charactersService.fight(arena.character1!.id, arena.character2!.id).pipe(
          map((winner) => arenaActions.fightSuccess({ winner: winner.id })),
          catchError((error) => of(arenaActions.fightError({ error }))),
        );
      }),
    );
  });
}

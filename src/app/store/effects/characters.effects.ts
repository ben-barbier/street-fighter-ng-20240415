import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { charactersActions } from '../actions/characters.actions';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharactersService } from '../../shared/services/characters.service';

@Injectable()
export class CharactersEffects {
  private actions$ = inject(Actions);
  private charactersService = inject(CharactersService);

  getCharacters$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(charactersActions.getAll),
      switchMap(() =>
        this.charactersService.getAll().pipe(
          map((characters) => charactersActions.getAllSuccess({ characters })),
          catchError((error) => of(charactersActions.getAllError({ error }))),
        ),
      ),
    );
  });

  getCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(charactersActions.get),
      switchMap((action) =>
        this.charactersService.getById(action.id).pipe(
          map((character) => charactersActions.getSuccess({ character })),
          catchError((error) => of(charactersActions.getError({ error }))),
        ),
      ),
    );
  });

  updateCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(charactersActions.update),
      switchMap((action) =>
        this.charactersService.update(action.character).pipe(
          map(() => charactersActions.updateSuccess({ character: action.character })),
          catchError((error) => of(charactersActions.updateError({ error }))),
        ),
      ),
    );
  });

  deleteCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(charactersActions.delete),
      switchMap((action) =>
        this.charactersService.deleteById(action.character.id).pipe(
          map(() => charactersActions.deleteSuccess({ character: action.character })),
          catchError((error) => of(charactersActions.deleteError({ error }))),
        ),
      ),
    );
  });
}

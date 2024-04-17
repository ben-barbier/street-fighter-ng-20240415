import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { charactersActions } from '../actions/characters.actions';
import { CharacterDTO } from '../../shared/models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersDispatchers {
  private store = inject(Store);

  public getAll(): void {
    this.store.dispatch(charactersActions.getAll());
  }

  public get(id: string): void {
    this.store.dispatch(charactersActions.get({ id }));
  }

  public deleteCharacter(character: CharacterDTO): void {
    this.store.dispatch(charactersActions.delete({ character }));
  }

  public updateCharacter(character: CharacterDTO): void {
    this.store.dispatch(charactersActions.update({ character }));
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharacterDTO } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class ArenaService {
  private _arena$ = new BehaviorSubject<CharacterDTO[]>([]);

  public arena$ = this._arena$.asObservable();

  public addCharacterToArena(character: CharacterDTO): void {
    // TODO: Vérifier si le character n'y est pas déjà :-)
    this._arena$.next(this._arena$.getValue().concat(character));
  }
  public removeCharacterFromArena(character: CharacterDTO): void {
    this._arena$.next(this._arena$.getValue().filter((c) => c.id !== character.id));
  }
}

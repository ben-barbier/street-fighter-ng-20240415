import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterDTO } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private _http = inject(HttpClient);

  private _baseUrl = 'http://localhost:3000';

  public getAll(): Observable<CharacterDTO[]> {
    return this._http.get<CharacterDTO[]>(`${this._baseUrl}/characters`);
  }

  public getById(id: string): Observable<CharacterDTO> {
    return this._http.get<CharacterDTO>(`${this._baseUrl}/characters/${id}`);
  }

  public deleteById(id: string): Observable<void> {
    return this._http.delete<void>(`${this._baseUrl}/characters/${id}`);
  }
}

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatAll, forkJoin, mergeMap, Observable, toArray } from 'rxjs';
import { Character, CharacterDTO } from '../models/character.model';
import { map } from 'rxjs/operators';
import { CountriesService } from './countries.service';
import { CountryDTO } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private _http = inject(HttpClient);
  private _countriesService = inject(CountriesService);
  private _baseUrl = 'http://localhost:3000';

  public getAll(): Observable<CharacterDTO[]> {
    // +10% de stamina
    return this._http.get<CharacterDTO[]>(`${this._baseUrl}/characters`).pipe(
      concatAll(),
      map((c): CharacterDTO => ({ ...c, stamina: c.stamina * 1.1 })),
      toArray(),
    );
  }

  // Use http://localhost:3000/countries/${id}
  public getAllWithCountryFlag1(): Observable<Character[]> {
    return this.getAll().pipe(
      concatAll(),
      mergeMap((character: CharacterDTO): Observable<Character> => {
        return this._countriesService
          .getByName(character.country)
          .pipe(map((country: CountryDTO): Character => ({ ...character, countryFlagUrl: country.flagUrl })));
      }),
      toArray(),
    );
  }

  public getAllWithCountryFlag2(): Observable<Character[]> {
    // TODO: use http://localhost:3000/countries
    return forkJoin([this.getAll(), this._countriesService.getAll()]).pipe(
      map(([characters, countries]: [CharacterDTO[], CountryDTO[]]): Character[] => {
        return characters.map(
          (character): Character => ({
            ...character,
            countryFlagUrl: countries.find((country) => country.name === character.country)?.flagUrl ?? '',
          }),
        );
      }),
    );
  }

  public getById(id: string): Observable<CharacterDTO> {
    return this._http.get<CharacterDTO>(`${this._baseUrl}/characters/${id}`);
  }

  public deleteById(id: string): Observable<void> {
    return this._http.delete<void>(`${this._baseUrl}/characters/${id}`);
  }

  public update(character: CharacterDTO): Observable<void> {
    return this._http.put<void>(`${this._baseUrl}/characters/${character.id}`, character);
  }

  public create(character: CharacterDTO): Observable<void> {
    return this._http.post<void>(`${this._baseUrl}/characters`, character);
  }
}

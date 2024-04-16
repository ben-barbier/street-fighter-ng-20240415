import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryDTO } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _http = inject(HttpClient);
  private _baseUrl = 'http://localhost:3000';

  public getAll(): Observable<CountryDTO[]> {
    return this._http.get<CountryDTO[]>(`${this._baseUrl}/countries`);
  }

  public getByName(id: string): Observable<CountryDTO> {
    return this._http.get<CountryDTO>(`${this._baseUrl}/countries/${id}`);
  }
}

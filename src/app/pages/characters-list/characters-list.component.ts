import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';
import { CharacterDTO } from '../../shared/models/character.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
})
export class CharactersListComponent implements OnInit {
  private _charactersService = inject(CharactersService);
  private _destroyRef = inject(DestroyRef);
  public characters: CharacterDTO[] = [];

  ngOnInit(): void {
    this._charactersService
      .getAll()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((characters) => (this.characters = characters));
  }
}

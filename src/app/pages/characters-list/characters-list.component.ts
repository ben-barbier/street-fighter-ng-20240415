import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';
import { CharacterDTO } from '../../shared/models/character.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CharacterCardComponent } from './character-card/character-card.component';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharacterCardComponent],
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

  public removeCharacterFromList(character: CharacterDTO) {
    this.characters = this.characters.filter((c) => c.id !== character.id);
  }
}

import { CommonModule } from '@angular/common';
import { Component, DestroyRef, EventEmitter, inject, input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkWithHref } from '@angular/router';
import { CharacterDTO } from '../../../shared/models/character.model';
import { CharactersService } from '../../../shared/services/characters.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ArenaService } from '../../../shared/services/arena.service';
import { CharactersDispatchers } from '../../../store/dispatchers/characters.dispatchers';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, RouterLinkWithHref],
})
export class CharacterCardComponent implements OnInit {
  public character = input.required<CharacterDTO>();
  @Output() public deleted = new EventEmitter<void>();

  private _arenaService = inject(ArenaService);
  private _charactersDispatchers = inject(CharactersDispatchers);

  public pictureUrl = '';

  ngOnInit(): void {
    this.pictureUrl = `http://localhost:4200/assets/characters/${this.character().id}_thumbnail.png`;
  }

  public delete(): void {
    this._charactersDispatchers.deleteCharacter(this.character());
  }

  public addToArena(): void {
    this._arenaService.addCharacterToArena(this.character());
  }
}

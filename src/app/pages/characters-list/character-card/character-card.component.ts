import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkWithHref } from '@angular/router';
import { CharacterDTO } from '../../../shared/models/character.model';
import { CharactersDispatchers } from '../../../store/dispatchers/characters.dispatchers';
import { ArenaDispatchers } from '../../../store/dispatchers/arena.dispatchers';

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

  private _arenaDispatchers = inject(ArenaDispatchers);
  private _charactersDispatchers = inject(CharactersDispatchers);

  public pictureUrl = '';

  ngOnInit(): void {
    this.pictureUrl = `http://localhost:4200/assets/characters/${this.character().id}_thumbnail.png`;
  }

  public delete(): void {
    this._charactersDispatchers.deleteCharacter(this.character());
  }

  public addToArena(): void {
    this._arenaDispatchers.addCharacterToArena(this.character().id);
  }
}

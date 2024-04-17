import { Component, inject, OnInit } from '@angular/core';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersDispatchers } from '../../store/dispatchers/characters.dispatchers';
import { CharactersSelectors } from '../../store/selectors/characters.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharacterCardComponent, AsyncPipe],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
})
export class CharactersListComponent implements OnInit {
  private _charactersDispatchers = inject(CharactersDispatchers);
  private _charactersSelectors = inject(CharactersSelectors);

  public characters$ = this._charactersSelectors.characters$;

  ngOnInit(): void {
    this._charactersDispatchers.getAll();
  }
}

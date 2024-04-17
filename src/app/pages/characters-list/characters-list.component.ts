import { Component, inject, OnInit } from '@angular/core';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersDispatchers } from '../../store/dispatchers/characters.dispatchers';
import { CharactersSelectors } from '../../store/selectors/characters-selectors.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharacterCardComponent, AsyncPipe],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
})
export class CharactersListComponent implements OnInit {
  private charactersDispatchers = inject(CharactersDispatchers);
  private charactersSelectors = inject(CharactersSelectors);

  public characters$ = this.charactersSelectors.characters$;

  ngOnInit(): void {
    this.charactersDispatchers.getAll();
  }
}

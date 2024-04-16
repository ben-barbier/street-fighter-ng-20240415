import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  DestroyRef,
  effect,
  EventEmitter,
  inject,
  input,
  Input,
  OnInit,
  output,
  Output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkWithHref } from '@angular/router';
import { CharacterDTO } from '../../../shared/models/character.model';
import { CharactersService } from '../../../shared/services/characters.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, RouterLinkWithHref],
})
export class CharacterCardComponent implements OnInit {
  public character = input.required<CharacterDTO>();
  public deleted = output<void>();

  private _characterService = inject(CharactersService);
  private _destroyRef = inject(DestroyRef);

  public pictureUrl = '';

  ngOnInit(): void {
    this.pictureUrl = `http://localhost:4200/assets/characters/${this.character().id}_thumbnail.png`;
  }

  public delete(id: string): void {
    this._characterService
      .deleteById(id)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => this.deleted.emit());
  }
}

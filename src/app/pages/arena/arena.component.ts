import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ArenaSelectors } from '../../store/selectors/arena.selectors';
import { MatButton } from '@angular/material/button';
import { ArenaDispatchers } from '../../store/dispatchers/arena.dispatchers';

@Component({
  selector: 'app-arena',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, MatButton],
  templateUrl: './arena.component.html',
  styleUrl: './arena.component.scss',
})
export default class ArenaComponent {
  private _arenaSelectors = inject(ArenaSelectors);
  private _arenaDispatchers = inject(ArenaDispatchers);

  public arena$ = this._arenaSelectors.arena$;

  public fight(): void {
    this._arenaDispatchers.fight();
  }
}

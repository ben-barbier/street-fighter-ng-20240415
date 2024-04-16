import { Component, inject } from '@angular/core';
import { ArenaService } from '../../shared/services/arena.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-arena',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './arena.component.html',
  styleUrl: './arena.component.scss',
})
export class ArenaComponent {
  private arenaService = inject(ArenaService);
  public arena$ = this.arenaService.arena$;
}

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { metaReducers, reducers } from './store/reducers';
import { CharactersEffects } from './store/effects/characters.effects';
import { ArenaEffects } from './store/effects/arena.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionSerializability: true,
        strictActionTypeUniqueness: true,
        strictActionImmutability: true,
        strictActionWithinNgZone: true,
        strictStateSerializability: true,
        strictStateImmutability: true,
      },
    }),
    provideStoreDevtools({ maxAge: 20 }),
    provideEffects([CharactersEffects, ArenaEffects]),
  ],
};

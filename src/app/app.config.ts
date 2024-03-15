import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localeRu from '@angular/common/locales/ru';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
  withViewTransitions,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { routes } from './app.routes';
import { AXTitleStrategy } from './core/config/route.title-strategy';
import { AX_TASK_NGRX_EFFECTS } from './core/config/store/ax.effects';
import { AX_TASK_NGRX_STORE } from './core/config/store/ax.store';

registerLocaleData(localeRu);

export const appConfig: ApplicationConfig = {
  providers: [
    provideEnvironmentNgxMask(),
    provideRouter(
      routes,
      withViewTransitions(),
      withPreloading(PreloadAllModules)
    ),
    provideAnimations(),
    provideHttpClient(),
    provideAngularSvgIcon(),
    AXTitleStrategy,
    provideHotToastConfig(),

    provideStore(AX_TASK_NGRX_STORE),
    provideEffects(AX_TASK_NGRX_EFFECTS),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      trace: isDevMode(),
    }),
  ],
};

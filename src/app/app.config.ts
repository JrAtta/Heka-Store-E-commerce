import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { errorsInterceptor } from './core/interceptors/errors.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:"top"}),withHashLocation()),
    provideClientHydration(),
    provideHttpClient( withFetch(), withInterceptors([errorsInterceptor,loadingInterceptor])),
    provideAnimations(),
    provideToastr({
      maxOpened:1,
      autoDismiss:true,
    }),
    importProvidersFrom(NgxSpinnerModule,BrowserAnimationsModule),
  ],
};

import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthGuard } from './auth.guard';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    importProvidersFrom( AuthModule.forRoot({
    domain:'dev-8rcbnqekg7l28rpz.eu.auth0.com',
    clientId:'emAj7ynGoFIjmNGElhk6IK9CBKVFlAXK',
    authorizationParams:{redirect_uri:window.location.origin} })
  ),
  AuthGuard
]
};

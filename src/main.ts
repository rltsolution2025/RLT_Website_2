import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ✅ Merge providers into the appConfig
bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(withInterceptorsFromDi())
  ]
}).catch((err) => console.error(err));

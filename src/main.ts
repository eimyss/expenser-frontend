import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if (environment.backend )  {
  console.log('Backend Calls are enabled');
} else {
  console.log('backend calls are DISABLED');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

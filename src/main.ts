import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

function start() {
  if (window.cordova) {
    return document.addEventListener('deviceready', bootstrap);
  }

  window.addEventListener('deviceready', bootstrap);
}

start();

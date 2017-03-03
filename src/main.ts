import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from './environments/environment';
import {AppModule} from './modules/app/module';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

function start() {
  if (window.cordova) {
    return document.addEventListener('deviceready', bootstrap);
  }

  window.addEventListener('load', bootstrap);
}

start();

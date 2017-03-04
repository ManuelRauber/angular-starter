import {NgModule} from '@angular/core';
import {LocalStorageService} from './services/localStorageService';
import {StorageService} from './services/storageService';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {SpinnerComponent} from './components/spinner/spinner';
import {PlatformService} from './services/platformService';
import {DeviceFeaturesService} from './services/deviceFeaturesService';
import {DeviceFeatures} from './models/deviceFeatures';
import {SupportsTouchDirective} from './directives/supportsTouchDirective';

export function deviceFeaturesFactory(deviceFeaturesService: DeviceFeaturesService) {
  return deviceFeaturesService.detect();
}

@NgModule({
  imports: [
    HttpModule,
    RouterModule
  ],
  exports: [
    HttpModule,
    RouterModule,
    SpinnerComponent,
    SupportsTouchDirective
  ],
  declarations: [
    SpinnerComponent,
    SupportsTouchDirective
  ],
  providers: [
    { provide: StorageService, useClass: LocalStorageService },
    PlatformService,
    DeviceFeaturesService,
    { provide: DeviceFeatures, useFactory: deviceFeaturesFactory, deps: [DeviceFeaturesService] }
  ]
})
export class SharedModule {
}

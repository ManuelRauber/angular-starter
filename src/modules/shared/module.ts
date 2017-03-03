import {NgModule} from '@angular/core';
import {LocalStorageService} from './services/localStorageService';
import {StorageService} from './services/storageService';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {SpinnerComponent} from './components/spinner/spinner';

@NgModule({
  imports: [
    HttpModule,
    RouterModule
  ],
  exports: [
    HttpModule,
    RouterModule,
    SpinnerComponent
  ],
  declarations: [
    SpinnerComponent
  ],
  providers: [
    { provide: StorageService, useClass: LocalStorageService }
  ]
})
export class SharedModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './components/root/root';
import {HeaderComponent} from './components/header/header';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {MenuComponent} from './components/menu/menu';
import {HomeComponent} from './components/home/home';
import {MenuService} from './services/menuService';
import {ProfileComponent} from './components/profile/profile';
import {CloseMenuOnMobileDirective} from './directives/closeMenuOnMobileDirective';
import {SharedModule} from '../shared/module';
import {FormsModule} from '@angular/forms';
import {SecurityModule} from '../security/module';

@NgModule({
  imports: [
    SecurityModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    SharedModule,
    FormsModule
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    ProfileComponent,
    CloseMenuOnMobileDirective
  ],
  bootstrap: [RootComponent],
  providers: [
    MenuService
  ]
})
export class AppModule {
}

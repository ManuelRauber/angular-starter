import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './components/root/root';
import {HeaderComponent} from './components/header/header';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {SidebarComponent} from './components/sidebar/sidebar';
import {HomeComponent} from './components/home/home';
import {SlideoutMenuService} from './services/slideoutMenuService';
import {FooterComponent} from './components/footer/footer';
import {ProfileComponent} from './components/profile/profile';
import {PlatformService} from './services/platformService';
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
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    CloseMenuOnMobileDirective
  ],
  bootstrap: [RootComponent],
  providers: [
    SlideoutMenuService,
    PlatformService
  ]
})
export class AppModule {
}

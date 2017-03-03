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

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent],
  providers: [
    SlideoutMenuService
  ]
})
export class AppModule {
}
import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {SharedModule} from '../shared/module';
import {AuthenticatedHttpService} from './services/authenticatedHttpService';
import {AuthenticatedHttpServiceImpl} from './services/authenticatedHttpServiceImpl';
import {SecurityService} from './services/securityService';
import {SecurityConfiguration} from './models/securityConfiguration';
import {IsAuthenticated} from './guards/isAuthenticated';
import {ROUTES} from './routes';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login';
import {FormsModule} from '@angular/forms';

export function configurationFactory() {
  const configuration = new SecurityConfiguration();
  configuration.authorityUrl = 'https://tt-demo-identity-server.azurewebsites.net/';
  configuration.clientId = 'resourceowner';
  configuration.clientSecret = 'secret';
  configuration.loginRoute = '/login';
  return configuration;
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class SecurityModule {
  public static forRoot(securityConfiguration?: Provider): ModuleWithProviders {
    return {
      ngModule: SecurityModule,
      providers: [
        { provide: AuthenticatedHttpService, useClass: AuthenticatedHttpServiceImpl },
        SecurityService,
        securityConfiguration || { provide: SecurityConfiguration, useFactory: configurationFactory },
        IsAuthenticated
      ]
    };
  }
}

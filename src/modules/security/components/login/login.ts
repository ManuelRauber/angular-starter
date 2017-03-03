import {Component, HostBinding} from '@angular/core';
import {SecurityService} from '../../services/securityService';

import 'rxjs/add/operator/delay';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-security-login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  @HostBinding('class.box')
  public loginCssClass = true;

  public username: string;
  public password: string;
  public error: string;

  public isLoggingIn: boolean;

  constructor(private _securityService: SecurityService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  public submit(): void {
    this.isLoggingIn = true;
    this._securityService.login(this.username, this.password)
      .subscribe(
        () => this._router.navigate([this._activatedRoute.snapshot.queryParams['redirectTo']]),
        error => this.error = error,
        () => this.isLoggingIn = false);
  }
}

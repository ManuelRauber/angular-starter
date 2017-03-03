import {Component, OnInit, Optional} from '@angular/core';
import {SecurityService} from '../../../security/services/securityService';
import {User} from '../../../security/models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent implements OnInit {
  public securityServiceAvailable: boolean;
  public user: User;

  constructor(@Optional() private _securityService: SecurityService, private _router: Router) {
    this.securityServiceAvailable = !!_securityService;
  }

  public ngOnInit(): void {
    if (!this._securityService) {
      return;
    }

    this.user = this._securityService.user;
  }

  public logout(): void {
    this._securityService.logout()
      .subscribe(() => this._router.navigate(['/home']));
  }
}

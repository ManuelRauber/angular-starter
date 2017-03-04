import {SlideoutMenuService} from '../services/slideoutMenuService';
import {Directive, HostListener} from '@angular/core';
import {PlatformService} from '../../shared/services/platformService';

@Directive({
  selector: '[appCloseMenuOnMobile]'
})
export class CloseMenuOnMobileDirective {
  @HostListener('click')
  public click(): void {
    if ((this._platformService.isMobileDevice && this._platformService.isMobileWeb)
      || this._platformService.isMobileWeb) {
      this._menuService.close();
    }
  }

  constructor(private _menuService: SlideoutMenuService, private _platformService: PlatformService) {
  }
}

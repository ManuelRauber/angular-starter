import {WindowRef} from '../../shared/services/windowRef';
import {Injectable} from '@angular/core';

@Injectable()
export class MenuService {
  private readonly bodyCssClass = 'menu-open';

  constructor(private _windowRef: WindowRef) {
  }

  public open(): void {
    this._windowRef.nativeWindow.document.body.classList.add(this.bodyCssClass);
  }

  public close(): void {
    this._windowRef.nativeWindow.document.body.classList.remove(this.bodyCssClass);
  }
}

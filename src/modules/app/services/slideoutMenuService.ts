import * as Slideout from 'slideout';

export class SlideoutMenuService {
  private _slideout: Slideout;

  public init(menu: HTMLElement, panel: HTMLElement): void {
    if (!menu) {
      throw new Error('menu not set.');
    }

    if (!panel) {
      throw new Error('panel not set.');
    }

    this._slideout = new Slideout(<any>{
      menu: menu,
      panel: panel,
      easing: 'ease-in-out',
      padding: 230
    });
  }
}

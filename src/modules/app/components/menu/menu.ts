import {Component, ElementRef, HostBinding, HostListener, Input} from '@angular/core';
import {MenuService} from '../../services/menuService';
import {WindowRef} from '../../../shared/services/windowRef';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.html',
  styleUrls: ['menu.scss']
})
export class MenuComponent {
  @Input()
  public isHeader: boolean;

  @HostBinding('class')
  public get navigationCssClass() {
    return (this.isHeader ? 'header' : 'bg-faded');
  }

  public menuId: number;

  @HostListener('document:click', ['$event'])
  public documentClicked(event: MouseEvent) {
    const targetElement = event.target;
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside && !this.isHeader) {
      this._windowRef.nativeWindow.document.body.classList.add('menu-transition');
      this._menuService.close();
      this.menuId = void 0;
    }
  }

  constructor(private _menuService: MenuService, private _elementRef: ElementRef,
              private _windowRef: WindowRef) {
  }

  public open(menuId: number) {
    if (menuId === this.menuId) {
      this.menuId = void 0;
      this._menuService.close();
      return;
    }

    if (!this.isHeader) {
      this._windowRef.nativeWindow.document.body.classList.add('menu-transition');
    }

    this.menuId = menuId;
    this._menuService.open();
  }

  @HostListener('transitionend')
  public transitionEnd() {
    this._windowRef.nativeWindow.document.body.classList.remove('menu-transition');
  }
}

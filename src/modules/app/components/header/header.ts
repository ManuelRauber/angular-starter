import {Component} from '@angular/core';
import {SlideoutMenuService} from '../../services/slideoutMenuService';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class HeaderComponent {
  constructor(private _slideoutMenuService: SlideoutMenuService) {
  }

  public toggleMenu() {
    this._slideoutMenuService.toggle();
  }
}

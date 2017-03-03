import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SlideoutMenuService} from '../../services/slideoutMenuService';

@Component({
  selector: 'app-root',
  templateUrl: 'root.html',
  styleUrls: ['root.scss']
})
export class RootComponent implements AfterViewInit {
  @ViewChild('sidebar', { read: ElementRef })
  public sidebar: ElementRef;

  @ViewChild('panel', { read: ElementRef })
  public panel: ElementRef;

  constructor(private _slideoutMenuService: SlideoutMenuService) {
  }

  public ngAfterViewInit(): void {
    this._slideoutMenuService.init(this.sidebar.nativeElement, this.panel.nativeElement);
  }
}

import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.html',
  styleUrls: ['sidebar.scss']
})
export class SidebarComponent {
  @HostBinding('class')
  public navigationCssClass = 'bg-faded';
}

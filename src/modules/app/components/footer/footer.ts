import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.html',
  styleUrls: ['footer.scss']
})
export class FooterComponent {
  @HostBinding('class')
  public footerCssClass = 'bg-faded';
}

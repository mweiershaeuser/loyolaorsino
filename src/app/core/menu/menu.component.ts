import { Component, Input } from '@angular/core';
import { Colour } from '../../../colour.types';

@Component({
  selector: 'loy-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() colour: Colour = 'primary';

  constructor() {}
}

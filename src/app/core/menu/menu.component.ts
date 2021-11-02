import { Component, Input } from '@angular/core';

@Component({
  selector: 'loy-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() color: 'primary' | 'white' = 'primary';
  menuOpened = false;

  constructor() {}

  toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }
}

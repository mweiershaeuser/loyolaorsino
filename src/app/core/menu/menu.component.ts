import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loy-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuOpened = false;

  constructor() {}

  toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }
}

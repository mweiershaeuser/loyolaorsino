import { Component } from '@angular/core';

@Component({
  selector: 'loy-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss'],
})
export class MemoriesComponent {
  memories: string[] = [
    'assets/images/animal-1.jpg',
    'assets/images/flowers-1.jpg',
    'assets/images/sand-1.jpg',
    'assets/images/animal-2.jpg',
    'assets/images/flowers-2.jpg',
    'assets/images/sand-2.jpg',
  ];
  constructor() {}
}

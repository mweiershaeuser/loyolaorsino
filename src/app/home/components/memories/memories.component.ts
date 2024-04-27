import { Component, OnInit } from '@angular/core';
import { shuffle } from '../../../shared/helpers/shuffle.helpers';

import memories from '../../../../assets/memories/memories.json';

@Component({
  selector: 'loy-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss'],
})
export class MemoriesComponent implements OnInit {
  memories: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.memories = shuffle(memories.map((m) => `assets/memories/${m}`));
  }
}

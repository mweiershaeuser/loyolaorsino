import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { shuffle } from 'src/app/shared/helpers/shuffle.helpers';
import { MemoriesService } from '../../services/memories/memories.service';

@Component({
  selector: 'loy-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss'],
})
export class MemoriesComponent implements OnInit {
  memories: string[] = [];

  constructor(private memoriesService: MemoriesService) {}

  ngOnInit(): void {
    this.memoriesService
      .getMemories()
      .pipe(take(1))
      .subscribe((memories) => {
        this.memories = shuffle(memories);
      });
  }
}

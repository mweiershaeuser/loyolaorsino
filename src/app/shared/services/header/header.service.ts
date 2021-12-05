import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  color$ = new BehaviorSubject<'primary' | 'white'>('primary');
  observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          this.color$.next(
            (e.target as HTMLElement).dataset.headerColor as 'primary' | 'white'
          );
        }
      });
    });
  }

  setColor(color: 'primary' | 'white'): void {
    this.color$.next(color);
  }
}

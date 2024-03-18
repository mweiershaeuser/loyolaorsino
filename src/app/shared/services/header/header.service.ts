import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Colour } from 'src/colour.types';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  colour$ = new BehaviorSubject<Colour>('primary');
  observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          this.colour$.next(
            (e.target as HTMLElement).dataset.headerColour as Colour,
          );
        }
      });
    });
  }

  setColour(colour: Colour): void {
    this.colour$.next(colour);
  }
}

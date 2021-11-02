import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  color$ = new BehaviorSubject<'primary' | 'white'>('primary');

  constructor() {}

  setColor(color: 'primary' | 'white'): void {
    this.color$.next(color);
  }
}

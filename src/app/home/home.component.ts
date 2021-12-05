import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HeaderService } from '../shared/services/header/header.service';

@Component({
  selector: 'loy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy, AfterViewInit {
  unsubscribe = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {}

  ngAfterViewInit(): void {
    this.setHeaderColor('white');
    this.route.fragment
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((fragment) => {
        if (fragment) {
          document
            .getElementById(fragment)
            ?.scrollIntoView({ behavior: 'smooth' });
        } else {
          document
            .getElementById('top')
            ?.scrollIntoView({ behavior: 'smooth' });
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  setHeaderColor(color: 'primary' | 'white'): void {
    this.headerService.setColor(color);
  }
}

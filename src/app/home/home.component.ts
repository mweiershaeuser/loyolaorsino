import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'loy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy, AfterViewInit {
  unsubscribe = new Subject<void>();

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
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
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/shared/services/header/header.service';

@Component({
  selector: 'loy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  color$: Observable<'primary' | 'white'>;

  constructor(private headerService: HeaderService) {
    this.color$ = this.headerService.color$;
  }
}

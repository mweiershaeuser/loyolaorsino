import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/shared/services/header/header.service';
import { Colour } from 'src/colour.types';

@Component({
  selector: 'loy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  colour$: Observable<Colour>;

  constructor(private headerService: HeaderService) {
    this.colour$ = this.headerService.colour$;
  }
}

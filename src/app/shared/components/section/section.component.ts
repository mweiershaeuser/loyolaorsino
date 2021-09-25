import { Component, Input } from '@angular/core';

@Component({
  selector: 'loy-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() fullHeight = false;
  @Input() background: string = 'white';

  constructor() {}
}

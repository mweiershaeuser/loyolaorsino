import { Component, Input } from '@angular/core';

@Component({
  selector: 'loy-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() title?: string;
  @Input() titleEn?: string;

  @Input() fullHeight = false;
  @Input() horizontal: 'start' | 'center' | 'end' = 'start';
  @Input() vertical: 'start' | 'center' | 'end' = 'start';

  @Input() background: string = 'white';
  @Input() bgPosition: string = '0% 0%';
  @Input() bgBlend: string = 'normal';

  constructor() {}
}

import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'loy-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss'],
})
export class MasonryComponent {
  @Input() masonryItems: any[] = [];
  @Input() masonryTemplate?: TemplateRef<any>;

  constructor() {}
}

import { Component, Input, TemplateRef } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'loy-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() slides: Array<any> = [];
  @Input() slideTemplate?: TemplateRef<any>;

  swiperConfig: SwiperOptions = {
    navigation: true,
    pagination: { clickable: true },
  };

  constructor() {}
}

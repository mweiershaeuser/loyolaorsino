import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'loy-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() slides: Array<any> = [];
  @Input() slideTemplate?: TemplateRef<any>;
  @Input() pagination: 'bullets' | 'fraction' | 'progressbar' = 'bullets';
  @Input() dynamicBullets = false;
  @Input() loop = false;
  @Input() autoplay = false;

  swiperConfig: SwiperOptions = {};

  constructor() {}

  ngOnInit(): void {
    this.swiperConfig = {
      navigation: true,
      pagination: {
        type: this.pagination,
        clickable: true,
        dynamicBullets: this.dynamicBullets,
      },
      loop: this.loop,
      autoplay: this.autoplay
        ? {
            delay: 2500,
          }
        : false,
    };
  }
}

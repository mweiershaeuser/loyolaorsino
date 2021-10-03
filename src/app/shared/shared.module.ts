import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './components/section/section.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwiperModule } from 'swiper/angular';
import { MasonryComponent } from './components/masonry/masonry.component';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [SectionComponent, SliderComponent, MasonryComponent],
  imports: [CommonModule, SwiperModule, NgxMasonryModule],
  exports: [SectionComponent, SliderComponent, MasonryComponent],
})
export class SharedModule {}

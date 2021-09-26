import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './components/section/section.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [SectionComponent, SliderComponent],
  imports: [CommonModule, SwiperModule],
  exports: [SectionComponent, SliderComponent],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './components/section/section.component';
import { MasonryComponent } from './components/masonry/masonry.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { SliderModule } from './components/slider/slider.module';

@NgModule({
  declarations: [SectionComponent, MasonryComponent],
  imports: [CommonModule, NgxMasonryModule, SliderModule],
  exports: [SectionComponent, MasonryComponent, SliderModule],
})
export class SharedModule {}

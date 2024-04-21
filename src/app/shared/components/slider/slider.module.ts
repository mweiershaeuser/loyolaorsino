import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule],
  exports: [SliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderModule {}

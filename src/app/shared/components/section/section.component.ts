import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Colour, colours } from 'src/colour.types';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'loy-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('anker') anker!: ElementRef;

  @Input() title?: string;
  @Input() titleEn?: string;

  @Input() horizontal: 'start' | 'center' | 'end' = 'start';
  @Input() vertical: 'start' | 'center' | 'end' = 'start';

  @Input() background: string = colours.light;
  @Input() bgPosition: string = '0% 0%';
  @Input() bgBlend: string = 'normal';

  @Input() textColour: Colour = 'primary';

  @Input() headerColour: Colour = 'primary';

  constructor(private headerService: HeaderService) {}

  ngAfterViewInit(): void {
    this.headerService.observer.observe(this.anker.nativeElement);
  }

  ngOnDestroy(): void {
    this.headerService.observer.unobserve(this.anker.nativeElement);
  }
}

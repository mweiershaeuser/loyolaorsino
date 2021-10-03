import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMasonryModule } from 'ngx-masonry';

import { MasonryComponent } from './masonry.component';

describe('MasonryComponent', () => {
  let component: MasonryComponent;
  let fixture: ComponentFixture<MasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasonryComponent],
      imports: [NgxMasonryModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

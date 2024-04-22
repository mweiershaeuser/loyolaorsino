import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryComponent } from './masonry.component';
import { NgxMasonryMock } from './ngx-masonry.mock';

describe('MasonryComponent', () => {
  let component: MasonryComponent;
  let fixture: ComponentFixture<MasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasonryComponent, NgxMasonryMock],
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

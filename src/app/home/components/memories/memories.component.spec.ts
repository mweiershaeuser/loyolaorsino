import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasonryComponent } from '../../../shared/components/masonry/masonry.component';

import { MemoriesComponent } from './memories.component';
import { NgxMasonryMock } from '../../../shared/components/masonry/ngx-masonry.mock';

describe('MemoriesComponent', () => {
  let component: MemoriesComponent;
  let fixture: ComponentFixture<MemoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoriesComponent, MasonryComponent, NgxMasonryMock],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

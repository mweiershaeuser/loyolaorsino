import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMasonryModule } from 'ngx-masonry';
import { MasonryComponent } from '../../../shared/components/masonry/masonry.component';
import { MemoriesService } from '../../services/memories/memories.service';

import { MemoriesComponent } from './memories.component';

describe('MemoriesComponent', () => {
  let component: MemoriesComponent;
  let fixture: ComponentFixture<MemoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoriesComponent, MasonryComponent],
      imports: [NgxMasonryModule, HttpClientTestingModule],
      providers: [MemoriesService],
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

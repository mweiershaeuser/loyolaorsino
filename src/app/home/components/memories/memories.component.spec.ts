import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasonryComponent } from '../../../shared/components/masonry/masonry.component';
import { MemoriesService } from '../../services/memories/memories.service';

import { MemoriesComponent } from './memories.component';
import { NgxMasonryMock } from '../../../shared/components/masonry/ngx-masonry.mock';

describe('MemoriesComponent', () => {
  let component: MemoriesComponent;
  let fixture: ComponentFixture<MemoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemoriesComponent, MasonryComponent, NgxMasonryMock],
      imports: [HttpClientTestingModule],
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

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionComponent } from '../shared/components/section/section.component';
import { NotesComponent } from './components/notes/notes.component';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SliderModule } from '../shared/components/slider/slider.module';
import { AboutComponent } from './components/about/about.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MemoriesComponent } from './components/memories/memories.component';
import { MasonryComponent } from '../shared/components/masonry/masonry.component';
import { NgxMasonryMock } from '../shared/components/masonry/ngx-masonry.mock';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SectionComponent,
        AboutComponent,
        NotesComponent,
        MemoriesComponent,
        MasonryComponent,
        NgxMasonryMock,
      ],
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        SliderModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

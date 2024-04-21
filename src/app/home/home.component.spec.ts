import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionComponent } from '../shared/components/section/section.component';
import { SliderComponent } from '../shared/components/slider/slider.component';
import { NotesComponent } from './components/notes/notes.component';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SectionComponent,
        NotesComponent,
        SliderComponent,
      ],
      imports: [RouterModule.forRoot([])],
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

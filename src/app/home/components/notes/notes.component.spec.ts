import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderComponent } from '../../../shared/components/slider/slider.component';
import { NotesService } from '../../services/notes/notes.service';

import { NotesComponent } from './notes.component';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesComponent, SliderComponent],
      imports: [HttpClientTestingModule],
      providers: [NotesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

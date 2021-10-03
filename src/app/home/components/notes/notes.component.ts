import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import Note from '../../models/note.model';
import { NotesService } from '../../services/notes/notes.service';

@Component({
  selector: 'loy-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService
      .getNotes()
      .pipe(take(1))
      .subscribe((notes) => {
        this.notes = notes;
      });
  }
}

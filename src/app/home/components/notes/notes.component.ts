import { Component, OnInit } from '@angular/core';
import Note from '../../models/note.model';

import notes from '../../../../assets/notes.json';

@Component({
  selector: 'loy-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = notes;

  constructor() {}

  ngOnInit(): void {
    this.notes = notes;
  }
}

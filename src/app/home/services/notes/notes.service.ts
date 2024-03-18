import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Note from '../../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  readonly baseUrl = environment.baseUrl;
  readonly spaceId = environment.spaceId;
  readonly environmentId = environment.environmentId;
  readonly apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http
      .get(
        `${this.baseUrl}/spaces/${this.spaceId}/environments/${this.environmentId}/entries?content_type=note&order=sys.createdAt`,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        },
      )
      .pipe(map((res: any) => res.items.map((item: any) => item.fields)));
  }
}

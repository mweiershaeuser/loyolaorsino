import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MemoriesService {
  readonly baseUrl = environment.baseUrl;
  readonly spaceId = environment.spaceId;
  readonly environmentId = environment.environmentId;
  readonly apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getMemories(): Observable<string[]> {
    return this.http
      .get(
        `${this.baseUrl}/spaces/${this.spaceId}/environments/${this.environmentId}/assets`,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      )
      .pipe(
        map((res: any) => res.items.map((item: any) => item.fields.file.url))
      );
  }
}

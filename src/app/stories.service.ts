import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from './stories/story';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private http: HttpClient) {}

  save(story: Story): Observable<Story> {
    return this.http.post<Story>('http://localhost:8080/story', story);
  }
}

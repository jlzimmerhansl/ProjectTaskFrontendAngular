import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from './stories/story';
import { TaskWithId } from './task/taskwithid';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private http: HttpClient) {}

  save(story: Story): Observable<Story> {
    return this.http.post<Story>('http://localhost:8080/story', story);
  }

  gerarPokerPlanning(): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/task/exportPlanningPoker',
      {}
    );
  }

  gerarJiraImporter(): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/task/exportJiraImporter',
      {}
    );
  }

  update(story: Story): Observable<any> {
    return this.http.put<Story>(
      `http://localhost:8080/story/${story.id}`,
      story
    );
  }

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>('http://localhost:8080/story');
  }

  getStorieById(id: string): Observable<Story> {
    return this.http.get<any>(`http://localhost:8080/story/${id}`);
  }

  deletar(story: Story): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/story/${story.id}`);
  }
}

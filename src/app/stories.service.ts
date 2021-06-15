import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from './stories/story';
import { TaskWithId } from './task/taskwithid';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  apiURL: string = environment.apiURLBase + '/story';
  jiraImporter: string = environment.apiURLBase + '/exportJiraImporter';
  planningPoker: string = environment.apiURLBase + '/exportPlanningPoker';

  constructor(private http: HttpClient) {}

  save(story: Story): Observable<Story> {
    return this.http.post<Story>(this.apiURL, story);
  }

  gerarPokerPlanning(): Observable<any> {
    return this.http.post<any>(this.planningPoker, {});
  }

  gerarJiraImporter(): Observable<any> {
    return this.http.post<any>(this.jiraImporter, {});
  }

  update(story: Story): Observable<any> {
    return this.http.put<Story>(`${this.apiURL}/${story.id}`, story);
  }

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.apiURL);
  }

  getStorieById(id: string): Observable<Story> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(story: Story): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${story.id}`);
  }
}

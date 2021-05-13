import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './landing/landing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  saveTeam(team: Team): Observable<Team> {
    return this.http.post<Team>('http://localhost:8080/task?nomeTime=', team);
  }
}

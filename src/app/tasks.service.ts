import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './landing/landing';
import { Task } from './task/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  saveTeam(team: Team): Observable<Team> {
    return this.http.post<Team>('http://localhost:8080/task?nomeTime=', team);
  }

  save(task: Task): Observable<Task> {
    return this.http.post<Task>('http://localhost:8080/task', task);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:8080/task');
  }

  deletar(task: Task): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/task/${task.id}`);
  }

  update(task: Task): Observable<any> {
    return this.http.put<Task>(`http://localhost:8080/task/${task.id}`, task);
  }
}

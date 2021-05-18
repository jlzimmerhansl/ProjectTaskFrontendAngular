import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './landing/landing';
import { Task } from './task/task';
import { TaskWithId } from './task/taskwithid';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  saveTeam(team: Team): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/task/addTeam?nomeTime=${team.nomeTime}`,
      {}
    );
  }

  save(task: Task): Observable<Task> {
    return this.http.post<Task>('http://localhost:8080/task', task);
  }

  getTasks(): Observable<TaskWithId[]> {
    return this.http.get<TaskWithId[]>('http://localhost:8080/task');
  }

  deletar(task: Task): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/task/${task.id}`);
  }

  update(task: Task): Observable<any> {
    return this.http.put<Task>(`http://localhost:8080/task/${task.id}`, task);
  }

  getTaskById(id: string): Observable<TaskWithId> {
    return this.http.get<any>(`http://localhost:8080/task/${id}`);
  }
}

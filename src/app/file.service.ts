import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from './landing/landing';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  apiURL: string = environment.apiURLBase + '/file';
  jiraImporter: string =
    environment.apiURLBase + '/file?exportJiraImporter=true';
  planningPoker: string =
    environment.apiURLBase + '/file?exportPlanningPoker=true';
  ParameterizationFile: string =
    environment.apiURLBase + '/file?exportParameterizationFile=true';

  constructor(private http: HttpClient) {}
  tokenStringHeader = localStorage.getItem('token');
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + JSON.parse(this.tokenStringHeader).token,
  });

  saveTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(`${this.apiURL}`, team, {
      headers: this.reqHeader,
    });
  }

  gerarPokerPlanning(): Observable<any> {
    return this.http.get<any>(this.planningPoker, {
      observe: 'response',
      headers: this.reqHeader,
    });
  }

  gerarJiraImporter(): Observable<any> {
    return this.http.get<any>(this.jiraImporter, {
      observe: 'response',
      headers: this.reqHeader,
    });
  }

  gerarParameterizationFile(): Observable<any> {
    return this.http.get<any>(this.ParameterizationFile, {
      observe: 'response',
      headers: this.reqHeader,
    });
  }
}

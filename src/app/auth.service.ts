import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './login/user';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL: string = environment.apiURLBase + '/user';
  apiURLForgot: string = environment.apiURLBase + '/user/forgot';
  tokenUrl: string = environment.apiURLBase + environment.tokenUrl;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {}
  tokenStringHeader = localStorage.getItem('token');
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + JSON.parse(this.tokenStringHeader).token,
  });

  handleToken() {
    const tokenString = localStorage.getItem('token');

    if (tokenString) {
      const token = JSON.parse(tokenString).token;
      return token;
    }
    return null;
  }

  signOut() {
    localStorage.removeItem('token');
  }

  getAuthenticatedUser() {
    const token = this.handleToken();
    if (token) {
      const user = this.jwtHelper.decodeToken(token).sub;
      return user;
    }
    return null;
  }

  isAuthenticated(): boolean {
    const token = this.handleToken();

    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  save(user: User): Observable<any> {
    return this.http.post<any>(this.apiURL, user);
  }

  handleLogin(user: User): Observable<any> {
    return this.http.post(this.tokenUrl, user);
  }

  handleForgotPassword(user: User): Observable<any> {
    let params = new HttpParams()
      .set('question', user.question)
      .set('answer', user.answer);
    return this.http.get(this.apiURLForgot, {
      params: params,
      observe: 'response',
    });
  }

  getUserById(id: string): Observable<User> {
    console.log(this.reqHeader);
    return this.http.get<any>(`${this.apiURL}/${id}`, {
      headers: this.reqHeader,
    });
  }
}

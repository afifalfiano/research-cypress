import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  userLogin = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient) { }

  login(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/api/auth/login', body);
  }
  register(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/api/auth/register', body);
  }
  logout(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/api/auth/logout', body);
  }

  isLogin(): Observable<any> {
    return this.userLogin;
  }

  statusLogin(status: boolean): any {
    return this.userLogin.next(status);
  }

  isLogout(): any {
    return this.userLogin.complete();
  }
}

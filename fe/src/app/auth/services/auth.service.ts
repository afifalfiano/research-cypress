import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
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
}

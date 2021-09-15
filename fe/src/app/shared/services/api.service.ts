import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: any;

  constructor(private httpService: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  get(url: any): Observable<any> {
    return this.httpService.get(this.baseUrl + url);
  }

  create(url: any, body: any): Observable<any> {
    return this.httpService.post(this.baseUrl + url, body);
  }

  update(url: any, body: any): Observable<any> {
    return this.httpService.patch(this.baseUrl + url, body);
  }

  delete(url): Observable<any> {
    return this.httpService.delete(this.baseUrl + url);
  }
}

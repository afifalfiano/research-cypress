import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: any;

  constructor(private httpService: HttpClient, private router: Router) {
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

  reload() {
    this.router.navigateByUrl(this.router.url, { skipLocationChange: true }).then(() => {
      const token = JSON.parse(localStorage.getItem('token'));
      if (token === null) {
        this.router.navigateByUrl('/auth/signin');
      } else {
        this.router.navigateByUrl('/users');
      }
  });
  }

  reloadComponent() {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    }
}

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = JSON.parse(localStorage.getItem('token'));
        console.log(token, 'inter');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token.access_token}`
                }
            });
        }

        return next.handle(request);
    }
}

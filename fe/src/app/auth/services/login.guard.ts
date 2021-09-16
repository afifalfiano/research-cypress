import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token);
    if (token === null) {
      this.router.navigateByUrl('/auth/signin');
      return false;
    }
    return true;
  }
}

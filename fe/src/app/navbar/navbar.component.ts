import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  email;
  token = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // tslint:disable-next-line:max-line-length
  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private authService: AuthService, private apiService: ApiService) {}
  ngOnInit() {
    this.email = JSON.parse(localStorage.getItem('token'));
    if (this.email === null) {
      this.token = true;
    } else {
      this.token = false;
    }
  }

  onClickLogout() {
    const email = JSON.parse(localStorage.getItem('token'));
    this.authService.logout({email: email.user.email}).subscribe((response: any) => {
      console.log(response);
      localStorage.clear();
      this.apiService.reload();
      this.router.navigateByUrl('auth/signin');
      window.location.reload();
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

}

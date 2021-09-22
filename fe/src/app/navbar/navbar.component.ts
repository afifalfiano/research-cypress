import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../shared/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  email;
  token = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // tslint:disable-next-line:max-line-length
  constructor(private breakpointObserver: BreakpointObserver, private toatsrService: ToastrService, private router: Router, private authService: AuthService, private apiService: ApiService) {}
  ngOnInit() {

    setInterval(() => {
      this.email = JSON.parse(localStorage.getItem('token'));
      console.log(this.email, 'token');
      if (this.email !== null) {
        this.token = true;
      } else {
        this.token = false;
      }
    }, 1000);
  }

  onClickLogout() {
    const email = JSON.parse(localStorage.getItem('token'));
    this.authService.logout({email: email.user.email}).subscribe((response: any) => {
      console.log(response);
      localStorage.clear();
      this.toatsrService.success('Success Logout!');
      setTimeout(() => {
        this.router.navigateByUrl('auth/signin');
        window.location.reload();
      }, 1000);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

}

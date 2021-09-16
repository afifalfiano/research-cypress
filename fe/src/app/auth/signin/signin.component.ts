import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    const body = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.authService.login(body).subscribe((response: any) => {
      console.log(response);
      const token = JSON.stringify(response);
      localStorage.setItem('token', token);
      this.apiService.reload();
      this.router.navigateByUrl('/users');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

}

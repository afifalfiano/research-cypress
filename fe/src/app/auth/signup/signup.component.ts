import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthService, private toastrService: ToastrService,private fb: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    const body = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.authService.register(body).subscribe((response: any) => {
      console.log(response);
      this.toastrService.success('Success Register');
      setTimeout(() => {
        this.router.navigateByUrl('/auth/signin');
      }, 2000);
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastrService.error('Error Register');
    });
  }

}

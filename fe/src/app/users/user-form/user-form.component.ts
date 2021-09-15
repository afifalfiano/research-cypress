import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form: FormGroup;
  public data: any;
  fileToUpload: File | null = null;
  title: any;
  dataCompany: any;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private location: Location, private apiService: ApiService) {
    this.data = this.router.getCurrentNavigation().extras.state;
    if (this.data !== undefined) {
      this.data = this.data.data;
    }
  }
  ngOnInit(): void {
    this.doInitForm();
    console.log(this.data);
    if (this.data === null || this.data === undefined) {
      // this.router.navigateByUrl('/users/');
    }
    this.doGetCompany();
  }

  previewImage($event) {
    console.log($event);
    this.fileToUpload = $event[0];
    console.log(this.fileToUpload, 'a');
  }

  doInitForm() {
    if (this.data === undefined || this.data === null) {
      this.title = 'Create';
      this.form = this.fb.group({
        photo_profile: null,
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        phone: [null, Validators.required],
        city: [null, Validators.required],
        country: [null, Validators.required],
        company: [null, Validators.required]
      });
    } else {
      this.title = 'Update';
      const company = this.data.company !== null ? this.data.company.id : null;
      this.form = this.fb.group({
        photo_profile: [this.data.photo_profile],
        firstName: [[this.data.firstName], Validators.required],
        lastName: [[this.data.lastName], Validators.required],
        email: [[this.data.email], Validators.required],
        phone: [[this.data.phone], Validators.required],
        city: [[this.data.city], Validators.required],
        country: [[this.data.country], Validators.required],
        company: [company, Validators.required]
      });
    }
  }

  doGetCompany() {
    this.apiService.get('/api/company').subscribe((response) => {
      console.log(response);
      this.dataCompany = response;
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  doCreate(body: any) {
    this.apiService.create('/api/users', body).subscribe((response: any) => {
      console.log(response);
      setTimeout(() => {
        this.router.navigateByUrl('users');
      }, 3000);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }
  doUpdate(body: any) {
    this.apiService.update('/api/users/' + this.data.id, body).subscribe((response: any) => {
      console.log(response);
      setTimeout(() => {
        this.router.navigateByUrl('users');
      }, 3000);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('photo_profile', this.fileToUpload);
    formData.append('firstName', this.form.value.firstName);
    formData.append('lastName', this.form.value.lastName);
    formData.append('email', this.form.value.email);
    formData.append('phone', this.form.value.phone);
    formData.append('city', this.form.value.city);
    formData.append('country', this.form.value.country);
    formData.append('company', this.form.value.company);
    if (this.data === undefined) {
      this.doCreate(formData);
    } else {
      this.doUpdate(formData);
    }
  }
}

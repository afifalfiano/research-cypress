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
  title: any;

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

  doInitForm() {
    if (this.data === undefined || this.data === null) {
      this.title = 'Create';
      this.form = this.fb.group({
        photo_profile: null,
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, Validators.required, Validators.email],
        phone: [null, Validators.required],
        city: [null, Validators.required],
        country: [null, Validators.required],
        company: [null, Validators.required]
      });
    } else {
      this.title = 'Update';
      // const company = this.data.company !== null ? this.data.company.id : null;
      this.form = this.fb.group({
        photo_profile: [this.data.photo_profile],
        firstName: [[this.data.firstName], Validators.required],
        lastName: [[this.data.lastName], Validators.required],
        email: [[this.data.email], Validators.required],
        phone: [[this.data.phone], Validators.required],
        city: [[this.data.city], Validators.required],
        country: [[this.data.country], Validators.required],
        company: [['-'], Validators.required]
      });
    }
  }

  doGetCompany() {
    this.apiService.get('/api/company').subscribe((response) => {
      console.log(response);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  onSubmit() {
    alert('Thanks!');
  }
}

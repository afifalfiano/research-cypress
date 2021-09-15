import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  companyForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    this.doInitForm();
  }

  doInitForm() {
    if (this.data === null) {
      this.companyForm = this.fb.group({
        company_name: [null, Validators.required]
      });
    } else {
      this.companyForm = this.fb.group({
        company_name: [this.data.company_name, Validators.required]
      });
    }
  }

  onCreate(body: any) {
    this.apiService.create('/api/company', body).subscribe((response) => {
      console.log(response);
      setTimeout(() => {
        this.dialogRef.close();
      }, 2000);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }
  onUpdate(body: any) {
    this.apiService.update('/api/company/' + this.data.id, body).subscribe((response) => {
      console.log(response);
      setTimeout(() => {
        this.dialogRef.close();
      }, 2000);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  onSubmit(): any {
    if (this.data === null) {
      this.onCreate(this.companyForm.value);
    } else {
      this.onUpdate(this.companyForm.value);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

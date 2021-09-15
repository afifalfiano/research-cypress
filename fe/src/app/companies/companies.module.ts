import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { CompanyTableComponent } from './company-table/company-table.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CompaniesComponent, CompanyTableComponent, CompanyFormComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    SharedModule,
  ]
})
export class CompaniesModule { }

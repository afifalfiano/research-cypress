import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesComponent } from './companies.component';
import { CompanyTableComponent } from './company-table/company-table.component';

const routes: Routes = [
  { path: '', component: CompanyTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }

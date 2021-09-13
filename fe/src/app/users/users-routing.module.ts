import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersViewComponent } from './users-view/users-view.component';

import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'create', component: UsersFormComponent },
  { path: 'detail/:id', component: UsersViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UsersComponent, UsersFormComponent, UsersViewComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }

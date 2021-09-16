import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { LoginGuard } from './services/login.guard';


@NgModule({
  declarations: [AuthComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  exports: [SignupComponent, SigninComponent],
  providers: [AuthService, LoginGuard]
})
export class AuthModule { }

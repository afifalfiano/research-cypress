import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './auth/services/login.guard';
import { SigninComponent } from './auth/signin/signin.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth/signin', pathMatch: 'full'},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate: [LoginGuard] },
  // tslint:disable-next-line:max-line-length
  { path: 'companies', loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule), canActivate: [LoginGuard]  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

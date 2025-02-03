import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserComponent } from './pages/management/user/user.component';

const routes: Routes = [
  //localhost:4200
  {path: '', component: HomeComponent},
  //localhost:4200/home
  {path: 'home', component: HomeComponent},
  //localhost:4200/login
  {path: 'login', component: LoginPageComponent},
  //localhost:4200/register
  {path: 'register', component: RegisterPageComponent},
  //localhost:4200/managementuser
  {path: 'managementuser', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserComponent } from './pages/management/user/user.component';
import { ProductComponent } from './pages/management/product/product.component';
import { PedidosComponent } from './pages/management/pedidos/pedidos.component';

const routes: Routes = [
  // Redirigir al login cuando la ruta sea la raíz
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // localhost:4200/home
  { path: 'home', component: HomeComponent },
  // localhost:4200/login
  { path: 'login', component: LoginPageComponent },
  // localhost:4200/register
  { path: 'register', component: RegisterPageComponent },
  // localhost:4200/managementuser
  { path: 'managementuser', component: UserComponent },
  // localhost:4200/managementproduct
  { path: 'managementproduct', component: ProductComponent },
  { path: 'managementpedidos', component: PedidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

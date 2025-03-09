import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserComponent } from './pages/management/user/user.component';
import { ProductComponent } from './pages/management/product/product.component';
import { PedidosComponent } from './pages/management/pedidos/pedidos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';

const routes: Routes = [
  // Redirigir al login cuando la ruta sea la raíz
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Rutas existentes
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'managementuser', component: UserComponent },
  { path: 'managementproduct', component: ProductComponent },
  { path: 'managementpedidos', component: PedidosComponent },
  { path: 'registro-usuarios', component: RegistroUsuariosComponent  },

  // Rutas con carga diferida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

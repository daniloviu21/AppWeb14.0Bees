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
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';

import { CategoriaFormComponent } from './pages/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './pages/categoria-list/categoria-list.component';
import { CotizacionFormComponent } from './pages/cotizacion-form/cotizacion-form.component';
import { CotizacionListComponent } from './pages/cotizacion-list/cotizacion-list.component';
import { DepartamentosListComponent } from './pages/departamentos-list/departamentos-list.component';
import { DepartamentosFormComponent } from './pages/departamentos-form/departamentos-form.component';
import { MarcaFormComponent } from './pages/marca-form/marca-form.component';
import { MarcaListComponent } from './pages/marca-list/marca-list.component';

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
  { path: 'registro-productos', component: RegistroProductoComponent  },


  { path: 'categoriaForm', component: CategoriaFormComponent }, // Asegurar que coincide con el router.navigate
  { path: 'categoriaForm/:id', component: CategoriaFormComponent },
  { path: 'categoriaList', component: CategoriaListComponent },

  { path: 'cotizacionForm', component: CotizacionFormComponent },
  { path: 'cotizacionForm/:id', component: CotizacionFormComponent },
  { path: 'cotizacionList', component: CotizacionListComponent },

  { path: 'departamentosForm', component: DepartamentosFormComponent },
  { path: 'departamentosForm/:id', component: DepartamentosFormComponent },
  { path: 'departamentosList', component: DepartamentosListComponent },

  { path: 'marcaForm', component: MarcaFormComponent },
  { path: 'marcaForm/:id', component: MarcaFormComponent },
  { path: 'marcaList', component: MarcaListComponent },
  // Rutas con carga diferida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

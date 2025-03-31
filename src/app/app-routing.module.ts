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
import { RolesListComponent } from './pages/roles-list/roles-list.component';
import { RolesFormComponent } from './pages/roles-form/roles-form.component';
import { ServicioFormComponent } from './pages/servicio-form/servicio-form.component';
import { ServicioListComponent } from './pages/servicio-list/servicio-list.component';
import { UsuarioListComponent } from './pages/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './pages/usuario-form/usuario-form.component';
import { VentasFormComponent } from './pages/ventas-form/ventas-form.component';
import { ClientesListComponent } from './pages/clientes-list/clientes-list.component';
import { ClientesFormComponent } from './pages/clientes-form/clientes-form.component';
import { AuthService } from './services/auth.service'; 
import { EmpleadosFormComponent } from './pages/empleados-form/empleados-form.component';
import { EmpleadosListComponent } from './pages/empleados-list/empleados-list.component';
import { ProductosFormComponent } from './pages/productos-form/productos-form.component';
import { ProductosListComponent } from './pages/productos-list/productos-list.component';


const routes: Routes = [
  // Redirigir al login cuando la ruta sea la raíz
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Rutas existentes
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthService]},
  { path: 'home', component: HomeComponent, canActivate: [AuthService] },
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent },
  { path: 'managementuser', component: UserComponent, canActivate: [AuthService] },
  { path: 'managementproduct', component: ProductComponent, canActivate: [AuthService] },
  { path: 'managementpedidos', component: PedidosComponent, canActivate: [AuthService] },
  { path: 'registro-usuarios', component: RegistroUsuariosComponent, canActivate: [AuthService]  },
  { path: 'registro-productos', component: RegistroProductoComponent, canActivate: [AuthService]  },


  { path: 'categoriaForm', component: CategoriaFormComponent, canActivate: [AuthService] }, // Asegurar que coincide con el router.navigate
  { path: 'categoriaForm/:id', component: CategoriaFormComponent },
  { path: 'categoriaList', component: CategoriaListComponent },

  { path: 'cotizacionForm', component: CotizacionFormComponent },
  { path: 'cotizacionForm/:id', component: CotizacionFormComponent },
  { path: 'cotizacionList', component: CotizacionListComponent },

  { path: 'departamentosForm', component: DepartamentosFormComponent },
  { path: 'departamentosForm/:id/:nombre', component: DepartamentosFormComponent },
  { path: 'departamentosList', component: DepartamentosListComponent },

  { path: 'marcaForm', component: MarcaFormComponent },
  { path: 'marcaForm/:id/:nombre', component: MarcaFormComponent },
  { path: 'marcaList', component: MarcaListComponent },

  { path: 'rolesForm', component: RolesFormComponent },
  { path: 'rolesForm/:id', component: RolesFormComponent },
  { path: 'rolesList', component: RolesListComponent },

  { path: 'servicioForm', component: ServicioFormComponent },
  { path: 'servicioForm/:id', component: ServicioFormComponent },
  { path: 'servicioList', component: ServicioListComponent },

  { path: 'usuarioForm', component: UsuarioFormComponent },
  { path: 'usuarioForm/:id', component: UsuarioFormComponent },
  { path: 'usuarioList', component: UsuarioListComponent },

  { path: 'ventasForm', component: VentasFormComponent },
  { path: 'ventasForm/:id', component: VentasFormComponent },

  { path: 'clientesForm', component: ClientesFormComponent },
  { path: 'clientesForm/:id', component: ClientesFormComponent },
  { path: 'clientesList', component: ClientesListComponent },

  { path: 'empleadosForm', component: EmpleadosFormComponent },
  { path: 'empleadosForm/:id', component: EmpleadosFormComponent },
  { path: 'empleadosList', component: EmpleadosListComponent },

  { path: 'productosForm', component: ProductosFormComponent },
  { path: 'productosForm/:id', component: ProductosFormComponent },
  { path: 'productosList', component: ProductComponent },

  { path: 'pedidosForm', component: PedidosComponent },
  { path: 'pedidosForm/:id', component: PedidosComponent },
  { path: 'pedidosList', component: PedidosComponent },

  // Rutas con carga diferida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

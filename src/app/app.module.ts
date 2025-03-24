import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TablepanelComponent } from './components/tablepanel/tablepanel.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/management/user/user.component';
import { ProductComponent } from './pages/management/product/product.component';
import { FormsModule } from '@angular/forms';
import { PedidosComponent } from './pages/management/pedidos/pedidos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { RegistroProductoComponent } from './registro-producto/registro-producto.component';
import { ReactiveFormsModule } from '@angular/forms';


import { CategoriaFormComponent } from './pages/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './pages/categoria-list/categoria-list.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TablepanelComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ClientPageComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    PedidosComponent,
    DashboardComponent,
    RegistroUsuariosComponent,
    RegistroProductoComponent,

    CategoriaFormComponent,
    CategoriaListComponent,
    CotizacionFormComponent,
    CotizacionListComponent,
    DepartamentosListComponent,
    DepartamentosFormComponent,
    MarcaFormComponent,
    MarcaListComponent,
    RolesListComponent,
    RolesFormComponent,
    ServicioFormComponent,
    ServicioListComponent,
    UsuarioListComponent,
    UsuarioFormComponent,
    VentasFormComponent,
    ClientesListComponent,
    ClientesFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,



  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

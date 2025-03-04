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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor( 
    private router: Router,
    private cookieService: CookieService
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Verificar si el usuario está autenticado
    if (sessionStorage.getItem("token")) {
      return true;  // Permite navegar a la ruta
    } else {
      // Si no está autenticado, redirige a login
      this.router.navigate(['/login']);
      return false;  // Bloquea la navegación
    }
  }

 
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: false,
})
export class LoginPageComponent implements OnInit {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (typeof window !== 'undefined') { // ✅ Verificamos si estamos en el navegador
      if (!localStorage.getItem('user')) {
        // ✅ Establecer usuario y contraseña por defecto si no existen
        localStorage.setItem('user', 'david');
        localStorage.setItem('password', '12345678');
      }

      if (localStorage.getItem('rememberMe') === 'true') {
        this.username = localStorage.getItem('user') || '';
      }
    }
  }

  login() {
    if (typeof window === 'undefined') return; // ✅ Evitamos errores en SSR

    const storedUser = localStorage.getItem('user');
    const storedPass = localStorage.getItem('password');

    if (this.username === storedUser && this.password === storedPass) {
      localStorage.setItem('loggedIn', 'true');
      if (this.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/home']); // Redirigir a la página principal
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}

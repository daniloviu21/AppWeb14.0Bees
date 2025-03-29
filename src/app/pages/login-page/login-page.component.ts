import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(private router: Router,
    private loginService: LoginService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('user')) {

        localStorage.setItem('user', 'david');
        localStorage.setItem('password', '12345678');
      }

      if (localStorage.getItem('rememberMe') === 'true') {
        this.username = localStorage.getItem('user') || '';
      }
    }
  }

  login() {
    // if (typeof window === 'undefined') return;

    // const storedUser = localStorage.getItem('user');
    // const storedPass = localStorage.getItem('password');

    // if (this.username === storedUser && this.password === storedPass) {
    //   localStorage.setItem('loggedIn', 'true');
    //   if (this.rememberMe) {
    //     localStorage.setItem('rememberMe', 'true');
    //   }
    //   alert('Inicio de sesión exitoso');
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   alert('Usuario o contraseña incorrectos');
    // }

    var datos = {
      username: this.username,
      password: this.password
    };

    this.loginService.loginUsuario(datos).subscribe((data) => {
      if(data.token){


        // this.cookieService.set('token', data.token, { secure: true, sameSite: 'Strict' });

        sessionStorage.setItem("token", data.token);
        this.router.navigate(['/dashboard']);
      }
      
    });;

  }
}

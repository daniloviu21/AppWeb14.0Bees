import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: false,

  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  username: string = '';
  email: string = '';
  password: string = '';

  onRegister() {
    console.log('Datos de registro:', this.username, this.email, this.password);
  }
}
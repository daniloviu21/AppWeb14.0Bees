import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css'],
  standalone: false
})
export class RegistroUsuariosComponent {
  usuario = {
    nombre: '',
    email: '',
    telefono: '',
    rol: '',
    password: '',
    confirmPassword: ''
  };

  listaUsuarios: any[] = [];
  mensaje: string = '';

  registrarUsuario() {
    if (!this.validarFormulario()) return;

    // Agregar usuario a la lista
    this.listaUsuarios.push({
      nombre: this.usuario.nombre,
      email: this.usuario.email,
      telefono: this.usuario.telefono,
      rol: this.usuario.rol
    });

    console.log('Usuario registrado:', this.usuario);
    this.mensaje = 'Usuario registrado con éxito ✅';

    this.limpiarFormulario();
  }

  validarFormulario(): boolean {
    return (
      this.usuario.nombre.trim() !== '' &&
      this.usuario.email.trim() !== '' &&
      this.usuario.telefono.trim() !== '' &&
      this.usuario.rol !== '' &&
      this.usuario.password.length >= 6 &&
      this.usuario.password === this.usuario.confirmPassword
    );
  }

  limpiarFormulario() {
    this.usuario = {
      nombre: '',
      email: '',
      telefono: '',
      rol: '',
      password: '',
      confirmPassword: ''
    };
  }
}

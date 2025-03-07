import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users = [
    { id: 1, usuario: 'juan', correo: 'juan@gmail.com', rol: 'admin' },
    { id: 2, usuario: 'maria', correo: 'maria@gmail.com', rol: 'user' },
    { id: 3, usuario: 'pedro', correo: 'pedro@gmail.com', rol: 'editor' },
    { id: 4, usuario: 'luisa', correo: 'luisa@gmail.com', rol: 'user' },
    { id: 5, usuario: 'carlos', correo: 'carlos@gmail.com', rol: 'admin' },
    { id: 6, usuario: 'ana', correo: 'ana@gmail.com', rol: 'user' },
    { id: 7, usuario: 'jorge', correo: 'jorge@gmail.com', rol: 'editor' },
    { id: 8, usuario: 'luis', correo: 'luis@gmail.com', rol: 'user' },
    { id: 9, usuario: 'elena', correo: 'elena@gmail.com', rol: 'admin' },
    { id: 10, usuario: 'ricardo', correo: 'ricardo@gmail.com', rol: 'user' },
    { id: 11, usuario: 'sofia', correo: 'sofia@gmail.com', rol: 'editor' },
    { id: 12, usuario: 'martin', correo: 'martin@gmail.com', rol: 'admin' },
    { id: 13, usuario: 'susana', correo: 'susana@gmail.com', rol: 'user' },
    { id: 14, usuario: 'pablo', correo: 'pablo@gmail.com', rol: 'editor' },
    { id: 15, usuario: 'veronica', correo: 'veronica@gmail.com', rol: 'admin' },
  ];

  editarUsuario(id: number) {
    console.log('Edit user', id);
  }

  guardarEdicion() {
  }

  eliminarUsuario(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    this.reordenarIds();
  }

  agregarUsuario(usuario: string, correo: string, rol: string) {
    const nuevoId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    this.users.push({ id: nuevoId, usuario, correo, rol });
  }

  openModal() {
  }

  reordenarIds() {
    this.users.forEach((user, index) => user.id = index + 1);
  }
}

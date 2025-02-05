import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
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
  { id: 16, usuario: 'pedro', correo: 'pedro.s@gmail.com', rol: 'user' },
  { id: 17, usuario: 'teresa', correo: 'teresa@gmail.com', rol: 'editor' },
  { id: 18, usuario: 'ricardo', correo: 'ricardo.p@gmail.com', rol: 'admin' },
  { id: 19, usuario: 'carla', correo: 'carla@gmail.com', rol: 'user' },
  { id: 20, usuario: 'jorge', correo: 'jorge.m@gmail.com', rol: 'editor' },
  { id: 21, usuario: 'beatriz', correo: 'beatriz@gmail.com', rol: 'admin' },
  { id: 22, usuario: 'felipe', correo: 'felipe@gmail.com', rol: 'user' },
  { id: 23, usuario: 'camila', correo: 'camila@gmail.com', rol: 'editor' },
  { id: 24, usuario: 'raul', correo: 'raul@gmail.com', rol: 'admin' },
  { id: 25, usuario: 'jose', correo: 'jose@gmail.com', rol: 'user' },
];


  editarUsuario(id: number) {
    console.log('Edit user', id);
  }

  eliminarUsuario(id: number) {
    console.log('Delete user', id);
  }

  openModal(){
    console.log('Open modal');
  }
}

import { Component } from '@angular/core';

interface User {
  id: number;
  avatar: string;
  name: string;
  email: string;
  isAdmin: boolean;
  has2FA: boolean;
}

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 
  users: User[] = [
    { id: 7, avatar: 'assets/avatar1.jpg', name: 'Mior Zaki', email: 'mior@nova.laravel.com', isAdmin: true, has2FA: true },
    { id: 6, avatar: 'assets/avatar2.jpg', name: 'Jess Archer', email: 'jess@nova.laravel.com', isAdmin: false, has2FA: true },
    { id: 5, avatar: 'assets/avatar3.jpg', name: 'Dries Vints', email: 'dries@nova.laravel.com', isAdmin: true, has2FA: false },
    { id: 4, avatar: 'assets/avatar4.jpg', name: 'Ian Landsman', email: 'ian@nova.laravel.com', isAdmin: false, has2FA: false },
    { id: 3, avatar: 'assets/avatar5.jpg', name: 'Mohamed Said', email: 'mohamed@nova.laravel.com', isAdmin: true, has2FA: false },
    { id: 2, avatar: 'assets/avatar6.jpg', name: 'David Hemphill', email: 'david@nova.laravel.com', isAdmin: false, has2FA: true },
    { id: 1, avatar: 'assets/avatar7.jpg', name: 'Taylor Otwell', email: 'taylor@nova.laravel.com', isAdmin: true, has2FA: false }
  ];

  createUser() {
    alert('Función para crear un usuario');
  }

  editUser(id: number) {
    alert(`Editar usuario con ID ${id}`);
  }

  deleteUser(id: number) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.users = this.users.filter(user => user.id !== id);
    }
  }
}

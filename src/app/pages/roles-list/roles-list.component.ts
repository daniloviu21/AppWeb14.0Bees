import { Component, OnInit } from '@angular/core';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-roles-list',
  standalone: false,
  
  templateUrl: './roles-list.component.html',
  styleUrl: './roles-list.component.css'
})
export class RolesListComponent implements OnInit {
  roles: any[] = [];

  constructor(private rolService: RolService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.rolService.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

  deleteRol(id: number): void {
    if (confirm('¿Seguro que deseas eliminar este rol?')) {
      this.rolService.deleteRol(id).subscribe(() => {
        this.loadRoles();
      });
    }
  }

  editarRol(id: number): void {
    console.log('Edit role with ID:', id);
  }

}

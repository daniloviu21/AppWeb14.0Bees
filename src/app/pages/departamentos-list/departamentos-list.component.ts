import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departamento.service';

@Component({
  selector: 'app-departamentos-list',
  standalone: false,
  templateUrl: './departamentos-list.component.html',
  styleUrl: './departamentos-list.component.css'
})
export class DepartamentosListComponent implements OnInit {
  departamentos: any[] = [];

  constructor(private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
    this.loadDepartamentos();
  }

  loadDepartamentos(): void {
    this.departamentoService.getDepartamentos().subscribe(data => {
      this.departamentos = data;
    });
  }

  editarDepartamento(id: number): void {
    // Add logic for editing a department
    console.log('Editar departamento con ID:', id);
  }

  deleteDepartamento(id: number): void {
    if (confirm('¿Seguro que deseas eliminar este departamento?')) {
      this.departamentoService.deleteDepartamento(id).subscribe(() => {
        this.loadDepartamentos();
      });
    }
  }
}

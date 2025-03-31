import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos-list',
  standalone: false,
  templateUrl: './departamentos-list.component.html',
  styleUrl: './departamentos-list.component.css'
})
export class DepartamentosListComponent implements OnInit {
  departamentos: any[] = [];

  constructor(private departamentoService: DepartamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDepartamentos();
  }

  loadDepartamentos(): void {
    this.departamentoService.getDepartamentos().subscribe(data => {
      this.departamentos = data;
      console.log(this.departamentos);
    });
  }

  editarDepartamento(id: number, nombre: string): void {
    // Add logic for editing a department
    this.router.navigate(['/departamentosForm/', id, nombre]);
  }

  deleteDepartamento(id: number): void {
    if (confirm('¿Seguro que deseas eliminar este departamento?')) {
      this.departamentoService.deleteDepartamento(id).subscribe(() => {
        this.router.navigate(['/departamentosList']);
      });
    }
  }
}

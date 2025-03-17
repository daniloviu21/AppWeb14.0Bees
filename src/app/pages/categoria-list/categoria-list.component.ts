import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria-list',
  standalone: false,
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  categorias: any[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (error) => {
        console.error('Error al obtener categorías:', error);
      }
    });
  }

  eliminarCategoria(id: number): void {
    if (confirm('¿Seguro que deseas eliminar esta categoría?')) {
      this.categoriaService.deleteCategoria(id).subscribe({
        next: () => {
          this.getCategorias(); // Recargar la lista después de eliminar
        },
        error: (error) => {
          console.error('Error al eliminar la categoría:', error);
        }
      });
    }
  }
}

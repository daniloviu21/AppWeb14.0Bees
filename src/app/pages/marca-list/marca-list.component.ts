import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-marca-list',
  standalone: false,
  
  templateUrl: './marca-list.component.html',
  styleUrl: './marca-list.component.css'
})
export class MarcaListComponent implements OnInit {
  marcas: any[] = [];

  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
    this.loadMarcas();
  }

  loadMarcas(): void {
    this.marcaService.getMarcas().subscribe(data => {
      this.marcas = data;
    });
  }

  editarMarca(id: number): void {
    console.log('Edit marca with ID:', id);
  }
  

  deleteMarca(id: number): void {
    if (confirm('¿Seguro que deseas eliminar esta marca?')) {
      this.marcaService.deleteMarca(id).subscribe(() => {
        this.loadMarcas();
      });
    }
  }

}

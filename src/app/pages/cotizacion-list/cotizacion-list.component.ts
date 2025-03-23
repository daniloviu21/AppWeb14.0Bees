import { Component, OnInit } from '@angular/core';
import { CotizacionService } from '../../services/cotizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotizacion-list',
  standalone: false,
  
  templateUrl: './cotizacion-list.component.html',
  styleUrl: './cotizacion-list.component.css'
})
export class CotizacionListComponent implements OnInit {
  cotizaciones: any[] = [];

  constructor(private cotizacionService: CotizacionService, private router: Router) {}

  ngOnInit(): void {
    this.loadCotizaciones();
  }

  loadCotizaciones(): void {
    this.cotizacionService.getCotizaciones().subscribe(data => {
      this.cotizaciones = data;
    });
  }

  editarCotizacion(id: number): void {
    this.router.navigate([`/cotizacion/${id}`]); // Navigate to the edit form, assuming you're using a route for it
  }

  eliminarCotizacion(id: number): void {
    if (confirm('¿Seguro que deseas eliminar esta cotización?')) {
      this.cotizacionService.deleteCotizacion(id).subscribe(() => {
        this.loadCotizaciones();
      });
    }
  }
}

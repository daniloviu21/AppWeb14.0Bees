import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VentaService } from '../../services/venta.service';

@Component({
  selector: 'app-ventas-form',
  standalone: false,

  templateUrl: './ventas-form.component.html',
  styleUrls: ['./ventas-form.component.css']
})
export class VentasFormComponent {
  detalles = [{ IdProducto: 0, cantidad: 1 }];

  constructor(
    private ventaService: VentaService,
    private router: Router
  ) {}

  agregarProducto(): void {
    this.detalles.push({ IdProducto: 0, cantidad: 1 });
  }

  eliminarProducto(index: number): void {
    this.detalles.splice(index, 1);
  }

  registrarVenta(): void {
    if (this.detalles.length === 0) return;

    this.ventaService.crearVenta({ details: this.detalles }).subscribe({
      next: () => {
        alert('Venta registrada con éxito');
        this.router.navigate(['/ventas']);
      },
      error: (err) => {
        console.error('Error al registrar la venta', err);
      }
    });
  }
}

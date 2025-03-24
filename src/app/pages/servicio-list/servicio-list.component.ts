import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-servicio-list',
  standalone: false,
  
  templateUrl: './servicio-list.component.html',
  styleUrl: './servicio-list.component.css'
})
export class ServicioListComponent implements OnInit {
editarServicio(arg0: any) {
throw new Error('Method not implemented.');
}
  servicios: any[] = [];
router: any;

  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {
    this.loadServicios();
  }

  loadServicios(): void {
    this.servicioService.getServicios().subscribe(data => {
      this.servicios = data;
    });
  }

  deleteServicio(id: number): void {
    if (confirm('¿Seguro que deseas eliminar este servicio?')) {
      this.servicioService.deleteServicio(id).subscribe(() => {
        this.loadServicios();
      });
    }
  }

}

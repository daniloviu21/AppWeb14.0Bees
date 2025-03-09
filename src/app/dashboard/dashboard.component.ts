import { Component, OnInit } from '@angular/core';

interface Pedido {
  id: number;
  cliente: string;
  total: number;
  estado: string;
}

interface Entrega {
  fecha: Date;
  cliente: string;
  estado: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false,
})
export class DashboardComponent implements OnInit {
  usuariosActivos: number = 0;
  pedidos: Pedido[] = [];
  enviosPendientes: number = 0;
  calendarioEntregas: Entrega[] = [];

  ngOnInit() {
    this.cargarDatos();
    this.cargarCalendarioEntregas();
  }

  cargarDatos() {
    this.usuariosActivos = 45;
    this.enviosPendientes = 8;

    this.pedidos = [
      { id: 101, cliente: 'Juan Pérez', total: 150.75, estado: 'Completado' },
      { id: 102, cliente: 'Ana López', total: 230.50, estado: 'Pendiente' },
      { id: 103, cliente: 'Carlos Ramírez', total: 99.99, estado: 'Completado' }
    ];
  }

  cargarCalendarioEntregas() {
    this.calendarioEntregas = [
      { fecha: new Date(2024, 2, 8), cliente: 'Juan Pérez', estado: 'Entregado' },
      { fecha: new Date(2024, 2, 9), cliente: 'Ana López', estado: 'Pendiente' },
      { fecha: new Date(2024, 2, 10), cliente: 'Carlos Ramírez', estado: 'Entregado' }
    ];
  }
}

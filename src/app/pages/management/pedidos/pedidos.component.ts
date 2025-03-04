import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  standalone: false,
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  pedidos = [
    { id: 1, cliente: 'Juan Pérez', total: 1500, estado: 'Pendiente' },
    { id: 2, cliente: 'María Gómez', total: 2500, estado: 'Enviado' },
    { id: 3, cliente: 'Carlos López', total: 1800, estado: 'Entregado' }
  ];

  editarPedido(id: number) {
    alert(`Editar pedido con ID: ${id}`);
  }

  eliminarPedido(id: number) {
    if (confirm(`¿Seguro que quieres eliminar el pedido con ID: ${id}?`)) {
      this.pedidos = this.pedidos.filter(pedido => pedido.id !== id);
    }
  }
}

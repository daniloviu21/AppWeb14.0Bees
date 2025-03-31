import { Component } from '@angular/core';
import { PedidosService } from '../../../services/pedidos.service';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-pedidos',
  standalone: false,
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  pedidos = [
    { id: 1, idcliente: 0, nombreCliente: ' ', total: 1500, estado: 'Pendiente' },
    { id: 2, idcliente: 0, nombreCliente: ' ', total: 2500, estado: 'Enviado' },
    { id: 3, idcliente: 0, nombreCliente: ' ', total: 1800, estado: 'Entregado' }
  ];

  clientes = [
    {
      id: 0,
      nombrecliente: ' '

    }
  ];

  constructor(
    private pedidoService: PedidosService,
    private clienteService: ClientesService
  ){

  }

  ngOnInit(){
    this.pedidoService.getPedidos().subscribe({
      next: (data) => {
        this.pedidos = data;
        console.log(this.pedidos);
      },
      error: (error) => {
        console.error('Error al obtener pedidos:', error);
      }
    });

    this.clienteService.getClientes().subscribe({
      next: (data) => {
        this.clientes = data;
        for(var i = 0; i < this.pedidos.length; i++){
          this.pedidos[i].nombreCliente = this.clientes.find(cliente => cliente.id === this.pedidos[i].idcliente)!.nombrecliente;
        }
        console.log(this.clientes);
      },
      error: (error) => {
        console.error('Error al obtener clientes:', error);
      }
    });
  
  }

  editarPedido(id: number) {
    alert(`Editar pedido con ID: ${id}`);
  }

  eliminarPedido(id: number) {
    if (confirm(`¿Seguro que quieres eliminar el pedido con ID: ${id}?`)) {
      this.pedidos = this.pedidos.filter(pedido => pedido.id !== id);
      this.reordenarIds();
    }
  }

  reordenarIds() {
    this.pedidos.forEach((pedido, index) => pedido.id = index + 1);
  }
}

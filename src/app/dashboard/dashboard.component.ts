import { Component, OnInit } from '@angular/core';

interface Pedido {
  id: number;
  cliente: string;
  total: number;
  estado: string;
}

interface PedidoExtendido {
  clienteNombre: string;
  clienteImagen: string;
  productoNombre: string;
  productoImagen: string;
  usuarioID: string;
  fecha: string;
  monto: number;
  estadoPago: string;
  estadoPagoClase: string;
  estadoPedido: string;
  estadoPedidoClase: string;
}

interface Entrega {
  fecha: Date;
  cliente: string;
  estado: string;
}

interface Order {
  title: string;
  description: string;
  time: string;
  discount: number;
  image: string;
}

interface Payment {
  name: string;
  description: string;
  time: string;
  avatar: string;
}

interface Transaction {
  title: string;
  description: string;
  amount: number;
  type: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false,
})
export class DashboardComponent implements OnInit {
  usuariosActivos: number = 0;
  pedidos: PedidoExtendido[] = [];
  enviosPendientes: number = 0;
  calendarioEntregas: Entrega[] = [];
  orders: Order[] = [];
  payments: Payment[] = [];
  transactions: Transaction[] = [];

  ngOnInit() {
    this.cargarDatos();
    this.cargarCalendarioEntregas();
    this.cargarOrders();
    this.cargarPayments();
    this.cargarTransactions();
  }

  cargarDatos() {
    this.usuariosActivos = 45;
    this.enviosPendientes = 8;

    this.pedidos = [
      {
        clienteNombre: 'Ellie Collins',
        clienteImagen: 'assets/cliente1.jpg',
        productoNombre: 'Anuncio publicitario',
        productoImagen: 'assets/producto1.jpg',
        usuarioID: '20233L166',
        fecha: '15/03/2025',
        monto: 9800,
        estadoPago: 'Pagado',
        estadoPagoClase: 'paid',
        estadoPedido: 'Entregado',
        estadoPedidoClase: 'delivered'
      },
      {
        clienteNombre: 'Sophie Nguyen',
        clienteImagen: 'assets/cliente2.jpg',
        productoNombre: 'Rotulacion carro',
        productoImagen: 'assets/producto2.jpg',
        usuarioID: '20223L062',
        fecha: '15/03/2025',
        monto: 3234,
        estadoPago: 'Cancelado',
        estadoPagoClase: 'failed',
        estadoPedido: 'Cancelado',
        estadoPedidoClase: 'cancelled'
      },
      {
        clienteNombre: 'Darcy Ryan',
        clienteImagen: 'assets/cliente3.jpg',
        productoNombre: 'Estampado camisa',
        productoImagen: 'assets/producto3.jpg',
        usuarioID: '20233L047',
        fecha: '15/03/2025',
        monto: 250.00,
        estadoPago: 'En espera',
        estadoPagoClase: 'awaiting',
        estadoPedido: 'Procesando',
        estadoPedidoClase: 'processing'
      }
    ];
  }

  cargarCalendarioEntregas() {
    this.calendarioEntregas = [
      { fecha: new Date(2024, 2, 8), cliente: 'Juan Pérez', estado: 'Entregado' },
      { fecha: new Date(2024, 2, 9), cliente: 'Ana López', estado: 'Pendiente' },
      { fecha: new Date(2024, 2, 10), cliente: 'Carlos Ramírez', estado: 'Entregado' }
    ];
  }

  cargarOrders() {
    this.orders = [
      {
        title: 'The Speaker',
        description: 'Nuevo pedido recibido',
        time: 'hace 2 minutos',
        discount: 20,
        image: 'assets/speaker.png'
      },
      {
        title: 'Head Massage',
        description: 'Nuevo pedido recibido',
        time: 'hace 3 minutos',
        discount: 30,
        image: 'assets/head-massage.png'
      },
      {
        title: 'Game Box',
        description: 'Nuevo pedido recibido',
        time: 'hace 5 minutos',
        discount: 60,
        image: 'assets/game-box.png'
      }
    ];
  }

  cargarPayments() {
    this.payments = [
      {
        name: 'Christian Ochoa',
        description: 'Pago pendiente. #26788',
        time: 'hace 3 minutos',
        avatar: 'assets/user1.png'
      },
      {
        name: 'Socorro Decker',
        description: 'Pago realizado #23457',
        time: 'hace 7 minutos',
        avatar: 'assets/user2.png'
      },
      {
        name: 'Haywood Sharp',
        description: '',
        time: 'hace 16 horas',
        avatar: 'assets/user3.png'
      }
    ];
  }

  cargarTransactions() {
    this.transactions = [
      { title: 'Visa Card', description: 'Rotulacion lona', amount: 1590, type: 'Card' },
      { title: 'Paypal', description: 'Serivicio de soldadura', amount: 310, type: 'Paypal' },
      { title: 'Travel', description: 'Letras 3D', amount: 4900, type: 'Travel' },
      { title: 'Shopping', description: 'Anuncios luminosos', amount: 285, type: 'Shopping' }
    ];
  }
}

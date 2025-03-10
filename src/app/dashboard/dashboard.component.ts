import { Component, OnInit} from '@angular/core';

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

  orders = [
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
    },
    {
      title: 'Game Box',
      description: 'Nuevo pedido recibido',
      time: 'hace 5 minutos',
      discount: 60,
      image: 'assets/game-box.png'
    },
    {
      title: 'Game Box',
      description: 'Nuevo pedido recibido',
      time: 'hace 5 minutos',
      discount: 60,
      image: 'assets/game-box.png'
    }

  ];

  payments = [
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
    },
    {
      name: 'Haywood Sharp',
      description: '',
      time: 'hace 6 horas',
      avatar: 'assets/user3.png'
    },
    {
      name: 'Haywood Sharp',
      description: '',
      time: 'hace 4 horas',
      avatar: 'assets/user3.png'
    }
  ];
  transactions = [
    { title: 'Visa Card', description: 'Laptop Ordered', amount: -1590, type: 'Card' },
    { title: 'Paypal', description: 'Payment Received', amount: 310, type: 'Paypal' },
    { title: 'Travel', description: 'Yosemite Trip', amount: -4900, type: 'Travel' },
    { title: 'Shopping', description: 'Bill Paid', amount: -285, type: 'Shopping' }
  ];
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    { id: 1, nombre: 'Camisa', precio: 25.99, categoria: 'Ropa' },
    { id: 2, nombre: 'Zapatos', precio: 59.99, categoria: 'Calzado' },
    { id: 3, nombre: 'Reloj', precio: 120.00, categoria: 'Accesorios' }
  ];

  editarProducto(id: number) {
    console.log(`Editar producto con ID: ${id}`);
    // Aquí iría la lógica para editar el producto
  }

  eliminarProducto(id: number) {
    console.log(`Eliminar producto con ID: ${id}`);
    this.products = this.products.filter(product => product.id !== id);
  }
}

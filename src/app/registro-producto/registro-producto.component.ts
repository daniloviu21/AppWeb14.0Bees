import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro-producto',
  standalone: false,
  
  templateUrl: './registro-producto.component.html',
  styleUrl: './registro-producto.component.css'
})
export class RegistroProductoComponent {

  productoForm: FormGroup;
  categorias: string[] = ['Electrónica', 'Ropa', 'Hogar', 'Juguetes', 'Deportes'];
  imagenesVistaPrevia: string[] = [];

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      descuento: ['', [Validators.min(0), Validators.max(100)]],
      descripcion: ['', Validators.required],
      metaTitulo: ['', Validators.required],
      metaNombre: ['', Validators.required],
      metaEtiquetas: ['', Validators.required],
      metaDescripcion: ['', Validators.required]
    });
  }

  agregarProducto() {
    if (this.productoForm.valid) {
      console.log('Producto agregado:', this.productoForm.value);
      alert('Producto agregado con éxito');
      this.productoForm.reset();
      this.imagenesVistaPrevia = [];
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  }

  cancelar() {
    this.productoForm.reset();
    this.imagenesVistaPrevia = [];
  }

  onFileSelected(event: any) {
    const archivos: FileList = event.target.files;
    this.cargarImagenes(archivos);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files) {
      this.cargarImagenes(event.dataTransfer.files);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  private cargarImagenes(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenesVistaPrevia.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

}

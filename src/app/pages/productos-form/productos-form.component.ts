import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DepartamentoService } from '../../services/departamento.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos-form',
  standalone: false,
  
  templateUrl: './productos-form.component.html',
  styleUrl: './productos-form.component.css'
})
export class ProductosFormComponent {
  productosForm: FormGroup;
  productoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productosForm = this.fb.group({
      nombreProducto: ['', Validators.required]
    });
  }


  guardarProducto(): void {
    if (this.productosForm.valid) {
      if (this.productosForm) {
        this.productoService.updateProducto(this.productoId, this.productosForm.value).subscribe(() => {
          this.router.navigate(['/productosList']);
        });
      } else {
        // this.productoService.createProducto(this.productosForm.value).subscribe(() => {
        //   this.router.navigate(['/productosList']);
        // });
      }
    }
  }

  ngOnInit(): void {
    this.productoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.productoId) {
      this.productoService.getProductoById(this.productoId).subscribe(data => {
        this.productosForm.patchValue(data);
      });
    }
  }

}

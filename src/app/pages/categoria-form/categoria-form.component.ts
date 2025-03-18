import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  standalone: false,
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  categoriaForm: FormGroup;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    // Cambie el nombre del campo para que coincida con el nombre del campo en la bd nombrecategoria

    this.categoriaForm = this.fb.group({
      nombrecategoria: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log('CategoriaFormComponent cargado correctamente.');
    this.id = this.route.snapshot.params['id'];
    
    if (this.id) {
      this.categoriaService.getCategoriaById(this.id).subscribe(data => {
        if (data) {
          this.categoriaForm.patchValue(data);
        }
      });
    }
  }

  guardarCategoria(): void {
    if (this.categoriaForm.invalid) return; // Evita enviar datos inválidos

    const categoriaData = this.categoriaForm.value;

    // Aqui le doy formato a los datos para la peticion http    
    const categoria = {
      nombreCategoria: categoriaData.nombrecategoria,
      descripcion: categoriaData.descripcion
    }

    if (this.id) {
      console.log(categoria);
      this.categoriaService.updateCategoria(this.id, categoria).subscribe(() => {
        this.router.navigate(['/categoriaList']);
        // aqui solo actualice la ruta a la que te redirige, es "categoriaList" en vez de "categoria"
      });
    } else {
      this.categoriaService.createCategoria(categoria).subscribe(() => {
        this.router.navigate(['/categoriaList']);
      });
    }
  }
}

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
    this.categoriaForm = this.fb.group({
      nombreCategoria: ['', Validators.required],
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

    if (this.id) {
      this.categoriaService.updateCategoria(this.id, categoriaData).subscribe(() => {
        this.router.navigate(['/categoria']);
      });
    } else {
      this.categoriaService.createCategoria(categoriaData).subscribe(() => {
        this.router.navigate(['/categoria']);
      });
    }
  }
}

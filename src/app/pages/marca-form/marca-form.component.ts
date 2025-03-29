import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-marca-form',
  standalone: false,
  
  templateUrl: './marca-form.component.html',
  styleUrl: './marca-form.component.css'
})
export class MarcaFormComponent implements OnInit {
  marcaForm: FormGroup;
  marcaId: number | null = null;
  nombreMarca: string | null = null;

  constructor(
    private fb: FormBuilder,
    private marcaService: MarcaService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.marcaForm = this.fb.group({
      nombreMarca: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.marcaId = Number(this.route.snapshot.paramMap.get('id'));
    this.nombreMarca = String(this.route.snapshot.paramMap.get('nombre'));

    var datos = {
      nombreMarca: this.nombreMarca

    };

    this.marcaForm.patchValue(datos);

    // if (this.marcaId) {
    //   this.marcaService.getMarcaById(this.marcaId).subscribe(data => {
    //     this.marcaForm.patchValue(data);
    //   });
    // }
  }

  submitForm(): void {
    if (this.marcaForm.valid) {
      if (this.marcaId) {
        this.marcaService.updateMarca(this.marcaId, this.marcaForm.value).subscribe(() => {
          this.router.navigate(['/marcas']);
        });
      } else {
        this.marcaService.createMarca(this.marcaForm.value).subscribe(() => {
          this.router.navigate(['/marcas']);
        });
      }
    }
  }

}

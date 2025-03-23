import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CotizacionService } from '../../services/cotizacion.service';

@Component({
  selector: 'app-cotizacion-form',
  standalone: false,
  
  templateUrl: './cotizacion-form.component.html',
  styleUrl: './cotizacion-form.component.css'
})
export class CotizacionFormComponent implements OnInit {
  cotizacionForm: FormGroup;
  cotizacionId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private cotizacionService: CotizacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.cotizacionForm = this.fb.group({
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      fecha: ['', Validators.required],
      estatus: ['', Validators.required],
      formaPago: ['', Validators.required],
      idCliente: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cotizacionId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.cotizacionId) {
      this.cotizacionService.getCotizacionById(this.cotizacionId).subscribe(data => {
        this.cotizacionForm.patchValue(data);
      });
    }
  }

  submitForm(): void {
    if (this.cotizacionForm.valid) {
      if (this.cotizacionId) {
        this.cotizacionService.updateCotizacion(this.cotizacionId, this.cotizacionForm.value).subscribe(() => {
          this.router.navigate(['/cotizaciones']);
        });
      } else {
        this.cotizacionService.createCotizacion(this.cotizacionForm.value).subscribe(() => {
          this.router.navigate(['/cotizaciones']);
        });
      }
    }
  }

}

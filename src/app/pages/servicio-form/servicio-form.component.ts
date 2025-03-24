import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from '../../services/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicio-form',
  standalone: false,
  
  templateUrl: './servicio-form.component.html',
  styleUrl: './servicio-form.component.css'
})
export class ServicioFormComponent  implements OnInit {
  servicioForm: FormGroup;
  id: number | null = null;
Router: any;

  constructor(
    private fb: FormBuilder,
    private servicioService: ServicioService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.servicioForm = this.fb.group({
      nombreServicio: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.servicioService.getServicioById(this.id).subscribe(data => {
        this.servicioForm.patchValue(data);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/servicios']);
  }

  guardarServicio(): void {
    if (this.servicioForm.invalid) return;

    if (this.id) {
      this.servicioService.updateServicio(this.id, this.servicioForm.value).subscribe(() => {
        this.router.navigate(['/servicio']);
      });
    } else {
      this.servicioService.createServicio(this.servicioForm.value).subscribe(() => {
        this.router.navigate(['/servicio']);
      });
    }
  }

}

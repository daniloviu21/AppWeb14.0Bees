import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartamentoService } from '../../services/departamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-departamentos-form',
  standalone: false,
  
  templateUrl: './departamentos-form.component.html',
  styleUrl: './departamentos-form.component.css'
})
export class DepartamentosFormComponent implements OnInit {
  departamentoForm: FormGroup;
  departamentoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private departamentoService: DepartamentoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.departamentoForm = this.fb.group({
      nombreDepartamento: ['', Validators.required]
    });
  }

  guardarDepartamento(): void {
    if (this.departamentoForm.valid) {
      if (this.departamentoId) {
        this.departamentoService.updateDepartamento(this.departamentoId, this.departamentoForm.value).subscribe(() => {
          this.router.navigate(['/departamentos']);
        });
      } else {
        this.departamentoService.createDepartamento(this.departamentoForm.value).subscribe(() => {
          this.router.navigate(['/departamentos']);
        });
      }
    }
  }

  ngOnInit(): void {
    this.departamentoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.departamentoId) {
      this.departamentoService.getDepartamentoById(this.departamentoId).subscribe(data => {
        this.departamentoForm.patchValue(data);
      });
    }
  }
}

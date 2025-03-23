import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolService } from '../../services/rol.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roles-form',
  standalone: false,
  
  templateUrl: './roles-form.component.html',
  styleUrl: './roles-form.component.css'
})
export class RolesFormComponent implements OnInit {
  rolForm: FormGroup;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private rolService: RolService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.rolForm = this.fb.group({
      rol: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.rolService.getRolById(this.id).subscribe(data => {
        this.rolForm.patchValue(data);
      });
    }
  }

  guardarRol(): void {
    if (this.rolForm.invalid) return;

    if (this.id) {
      this.rolService.updateRol(this.id, this.rolForm.value).subscribe(() => {
        this.router.navigate(['/roles']);
      });
    } else {
      this.rolService.createRol(this.rolForm.value).subscribe(() => {
        this.router.navigate(['/roles']);
      });
    }
  }

}

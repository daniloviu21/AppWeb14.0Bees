import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  standalone: false,
  
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent  implements OnInit {
  usuarioForm: FormGroup;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.usuarioService.getUsuarioById(this.id).subscribe(data => {
        this.usuarioForm.patchValue(data);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/usuarios']);
  }  

  guardarUsuario(): void {
    if (this.usuarioForm.invalid) return;

    if (this.id) {
      this.usuarioService.updateUsuario(this.id, this.usuarioForm.value).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.usuarioService.createUsuario(this.usuarioForm.value).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    }
  }

}

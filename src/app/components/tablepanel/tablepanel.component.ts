import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablepanel',
  standalone: false,
  
  templateUrl: './tablepanel.component.html',
  styleUrl: './tablepanel.component.css'
})
export class TablepanelComponent {

  @Input() id: number = 0;
  @Input() usuario: string = '';
  @Input() correo: string = '';
  @Input() rol: string = '';

  editar(id: number) {
    console.log('Editar', id);
  }

  eliminar(id: number) {
    console.log('Eliminar', id);
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-detalle',
  standalone: true,
  imports: [],
  templateUrl: './curso-detalle.component.html',
  styleUrl: './curso-detalle.component.css',
})
export class CursoDetalleComponent {
  @Input('id') id!: string;
}

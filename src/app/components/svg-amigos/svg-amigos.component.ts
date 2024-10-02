import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-amigos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-amigos.component.html',
  styleUrl: './svg-amigos.component.css',
})
export class SvgAmigosComponent {
  @Input() estilos = 'min-h-[50px] max-h-[450px] hidden sm:block';
}

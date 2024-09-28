import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-curso',
  standalone: true,
  imports: [],
  templateUrl: './cart-curso.component.html',
  styleUrl: './cart-curso.component.css',
})
export class CartCursoComponent {
  @Input() curso: any;
}

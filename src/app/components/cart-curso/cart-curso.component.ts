import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-curso',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart-curso.component.html',
  styleUrl: './cart-curso.component.css',
})
export class CartCursoComponent {
  @Input() curso: any;
}

import { Component, inject, OnInit } from '@angular/core';
import { CartStateService } from '../../services/cart-state.service';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  cursos: Curso[] = [];
  cartStateService = inject(CartStateService);

  ngOnInit(): void {
    this.cartStateService.cursos$.subscribe((qty) => {
      this.cursos = qty;
    });
  }
}

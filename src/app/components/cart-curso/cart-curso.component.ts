import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartStateService } from '../../services/cart-state.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-curso',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart-curso.component.html',
  styleUrl: './cart-curso.component.css',
})
export class CartCursoComponent {
  @Input() curso: any;
  CartStateService = inject(CartStateService);
  router = inject(Router);
  Agregar() {
    const agregado = this.CartStateService.addCurso(this.curso);
    if (agregado) {
      Swal.fire({
        icon: 'success',
        title: 'Agregado al carrito',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Seguir Comprando',
        denyButtonText: `Ir a Pagar`,
      }).then((result) => {
        if (result.isDenied) {
          this.router.navigate(['/carrito']);
        }
      });
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Este curso ya está en el carrito',
        showCancelButton: true,
        confirmButtonText: 'OK',
      });
    }
  }
}

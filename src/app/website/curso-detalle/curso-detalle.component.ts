import { Component, inject, Input, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CartStateService } from '../../services/cart-state.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curso-detalle',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './curso-detalle.component.html',
  styleUrl: './curso-detalle.component.css',
})
export class CursoDetalleComponent implements OnInit {
  @Input('id') id!: string;
  cursoService = inject(CursosService);
  cartStateService = inject(CartStateService);
  curso: any;
  recomendados: any[] = [];
  ngOnInit(): void {
    this.cursoService.getCourseById(this.id).subscribe((res) => {
      this.curso = res;
      this.cursoService.getCursoCategoria(res.Categoria.id).subscribe((res) => {
        this.recomendados = res;
      });
    });
  }

  router = inject(Router);
  Agregar() {
    const agregado = this.cartStateService.addCurso(this.curso);
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

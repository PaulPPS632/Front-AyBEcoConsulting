import { Component, inject, Input, OnInit } from '@angular/core';
import { CartStateService } from '../../services/cart-state.service';
import { Curso } from '../../models/curso.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-curso-item',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cart-curso-item.component.html',
  styleUrl: './cart-curso-item.component.css',
})
export class CartCursoItemComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.curso);
  }
  cartStateService = inject(CartStateService);
  @Input() curso: any;
  removeCurso(curso: any) {
    this.cartStateService.removeCurso(curso);
  }

  Remove() {
    this.cartStateService.removeCurso(this.curso.id);
  }
}

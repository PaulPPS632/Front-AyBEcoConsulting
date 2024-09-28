import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartStateService } from '../../services/cart-state.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-header-website',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-website.component.html',
  styleUrl: './header-website.component.css',
})
export class HeaderWebsiteComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    initFlowbite();
  }
  cartState = inject(CartStateService).state;
  queryParams: any = {
    page: 0,
    size: 10,
    search: '',
    sort: '',
    marca: '', // Ajusta esto según tus necesidades
    categoria: '',
    subcategoria: '',
  };
  buscar(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.queryParams.search = inputElement.value;
    this.router.navigate(['catalogo'], {
      //relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge', // O 'preserve' si quieres mantener los parámetros existentes
    });
  }
}

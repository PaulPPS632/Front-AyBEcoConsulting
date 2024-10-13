import { Component, inject, OnInit } from '@angular/core';
import { CursosService } from '../../../services/cursos.service';
import { CartCursoComponent } from '../../../components/cart-curso/cart-curso.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CartCursoComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent implements OnInit {
  cursosServices = inject(CursosService);
  cursos: any[] = [];
  ngOnInit(): void {
    this.cursosServices.getAll().subscribe((res) => {
      this.cursos = res;
      console.log(this.cursos);
    });
  }
}

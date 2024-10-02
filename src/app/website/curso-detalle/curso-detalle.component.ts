import { Component, inject, Input, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { CarouselComponent } from '../../components/carousel/carousel.component';

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
  curso: any;
  recomendados: any[] = [];
  ngOnInit(): void {
    this.cursoService.getCourseById(this.id).subscribe((res) => {
      this.curso = res;
      console.log(this.curso);
      this.cursoService.getCursoCategoria(res.Categoria.id).subscribe((res) => {
        this.recomendados = res;
        console.log(this.recomendados);
      });
    });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  cursosServices = inject(CursosService);
  Data: any = {
    nuevos: [],
    porCategoria: [],
  };
  ngOnInit(): void {
    this.cursosServices.getCoursesHome().subscribe(
      (res) => {
        this.Data = {
          nuevos: res.nuevos,
          porCategoria: res.porCategoria.filter(
            (categoria: any) => categoria.cursos.length > 5
          ),
        };
      },
      (error) => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }
}

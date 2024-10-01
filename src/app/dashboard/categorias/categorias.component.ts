import { Component, inject, OnInit } from '@angular/core';
import { TablesComponent } from '../../components/tables/tables.component';
import { CategoriasService } from '../../services/categorias.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [TablesComponent, ModalComponent, FormsModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent implements OnInit {
  data: any[] = [];
  columns: string[] = [];
  categoriasService = inject(CategoriasService);
  FlagModal = false;
  Categoria = {
    nombre: '',
    descripcion: '',
  };
  ngOnInit(): void {
    this.CargarCategorias();
    this.columns = ['id', 'nombre', 'descripcion'];
  }
  CargarCategorias() {
    this.categoriasService.getAll().subscribe((res) => (this.data = res));
  }

  ToggleModal() {
    this.FlagModal = !this.FlagModal;
  }
  Create() {
    this.categoriasService.create(this.Categoria).subscribe(
      (res) => {
        Swal.fire({
          title: 'Categoria creada correctamente',
          icon: 'success',
        });
        this.Categoria = {
          nombre: '',
          descripcion: '',
        };
        this.ToggleModal();
        this.CargarCategorias();
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: error.error.message,
        });
        this.ToggleModal();
      }
    );
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import { CursosService } from '../../../services/cursos.service';
import { ModalComponent } from '../../../components/modal/modal.component';
import { EntidadesService } from '../../../services/entidades.service';
import { InputComponent } from '../../../components/input/input.component';
import { SelectComponent } from '../../../components/select/select.component';
import { SelectSerachComponent } from '../../../components/select-serach/select-serach.component';
import { TablesComponent } from '../../../components/tables/tables.component';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    ModalComponent,
    InputComponent,
    SelectComponent,
    SelectSerachComponent,
    TablesComponent,
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent implements OnInit {
  categoriasService = inject(CategoriasService);
  cursosService = inject(CursosService);
  entidadesService = inject(EntidadesService);
  authService = inject(AuthService);

  categorias: any[] = [];
  cursos: any[] = [];
  entidades: any[] = [];

  FlagModal = false;
  selectedFilePrincipal: File | null = null;
  imagencarga: any[] = [];
  NewCurso = {
    nombre: '',
    descripcion: '',
    precio: 0,
    duracion: 0,
    nivel: '',
    EntidadAutorId: '',
    EntidadCreadorId: '',
    CategoriaId: '',
  };
  ngOnInit(): void {
    this.CargarCursos();
    this.authService.usuario$.subscribe((usuario) => {
      if (usuario) {
        this.NewCurso.EntidadCreadorId = usuario.id;
      }
    });
  }
  CargarCategorias() {
    this.categoriasService.getAll().subscribe((res) => (this.categorias = res));
  }
  CargarCursos() {
    this.cursosService.getAll().subscribe((res) => (this.cursos = res));
  }
  CargarEntidades() {
    this.entidadesService
      .getByRol(2)
      .subscribe((res) => (this.entidades = res));
  }
  ToggleModal() {
    this.FlagModal = !this.FlagModal;
  }
  AbrirModal() {
    if (this.categorias.length == 0) this.CargarCategorias();
    if (this.entidades.length == 0) this.CargarEntidades();
    this.ToggleModal();
  }
  Crear() {
    const formData = new FormData();
    console.log(this.NewCurso);
    formData.append('producto', JSON.stringify(this.NewCurso));
    if (this.selectedFilePrincipal) {
      formData.append('fileprincipal', this.selectedFilePrincipal);
    }
    this.cursosService.create(formData).subscribe({
      next: () => {
        //actualizar productos
        this.CargarCursos();
        Swal.fire({
          icon: 'success',
          title: 'Producto agregado',
          text: 'El producto ha sido agregado al inventario.',
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Producto no agregado',
          text: error,
        });
      },
    });
  }
  onFileChangePrincipal(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFilePrincipal = event.target.files[0];
      //cargar imagencarga []
      if (this.selectedFilePrincipal) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagencarga.push(e.target.result);
        };
        reader.readAsDataURL(this.selectedFilePrincipal);
      }
    }
  }
}

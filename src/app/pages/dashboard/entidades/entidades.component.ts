import { Component, inject, OnInit } from '@angular/core';
import { EntidadesService } from '../../../services/entidades.service';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/input/input.component';
import { SelectSerachComponent } from '../../../components/select-serach/select-serach.component';
import { TablesComponent } from '../../../components/tables/tables.component';
import { SelectComponent } from '../../../components/select/select.component';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entidades',
  standalone: true,
  imports: [
    ModalComponent,
    InputComponent,
    SelectSerachComponent,
    TablesComponent,
    SelectComponent,
    FormsModule,
  ],
  templateUrl: './entidades.component.html',
  styleUrl: './entidades.component.css',
})
export class EntidadesComponent implements OnInit {
  entidadesService = inject(EntidadesService);
  authService = inject(AuthService);
  entidades: any[] = [];
  Filtro: any[] = [];
  FiltroRol = 0;
  buscado = '';
  FlagModal = false;
  Roles = [
    { id: 1, nombre: 'administrador' },
    { id: 2, nombre: 'profesor' },
    { id: 3, nombre: 'encargado' },
    { id: 4, nombre: 'alumno' },
  ];
  NewEntidad = {
    nombre: '',
    apellido: '',
    documento: '',
    direccion: '',
    telefono: '',
    email: '',
    password: '',
    RolId: 0,
    id_tipoEntidad: 1,
  };
  Buscador = '';
  ngOnInit(): void {
    this.cargarEntidades();
  }
  cargarEntidades() {
    this.entidadesService.getAll().subscribe((res) => {
      this.entidades = res;
      this.Filtro = [...this.entidades];
    });
  }
  ToggleModal() {
    this.FlagModal = !this.FlagModal;
  }
  AbrirModal() {
    if (this.entidades.length == 0) this.cargarEntidades();
    this.ToggleModal();
  }
  Crear() {
    this.authService.create(this.NewEntidad).subscribe(
      (response) => {
        this.ToggleModal();
        Swal.fire({
          icon: 'success',
          title: 'Entidad Registrada',
          text: response.message,
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: error.error.message,
        });
      }
    );
  }
  aplicarFiltro() {
    this.Filtro = this.entidades.filter((entidad) => {
      const matchesNombre = entidad.nombre.toLowerCase().includes(this.buscado);
      const matchesRol =
        this.FiltroRol === 0 || entidad.RolId === this.FiltroRol;
      return matchesNombre && matchesRol;
    });
  }
  search(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.buscado = inputElement.value.toLowerCase();
    this.aplicarFiltro(); // Llamar al método de filtro
  }

  // Método para capturar el cambio de rol y aplicar filtro
  BuscarRol(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.FiltroRol = Number(selectElement.value);
    this.aplicarFiltro(); // Llamar al método de filtro
  }
}

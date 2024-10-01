import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ModalComponent } from '../../components/modal/modal.component';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, ModalComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent implements OnInit {
  UserNew = {
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    documento: '',
    direccion: '',
    telefono: '',
    TipoEntidadId: 1,
    RolId: 4,
  };
  CreateOpen = false;
  authService = inject(AuthService);
  router = inject(Router);
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //Flowbite se inicia después de que se haya cargado la pagina
        setTimeout(() => initFlowbite(), 0);
      }
    });
  }
  openCModal() {
    this.CreateOpen = true;
  }
  closeModal() {
    this.CreateOpen = false;
  }
  register() {
    this.authService.register(this.UserNew).subscribe(
      (response) => {
        this.CreateOpen = false;
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

  login() {
    this.authService
      .Logged(this.UserNew.email, this.UserNew.password)
      .subscribe(
        (response) => {
          console.log(response.usuario.Rol.nombre);
          if (response.usuario.Rol.nombre == 'alumno') {
            console.log('entra');
            this.router.navigate(['/panel']);
          } else {
            console.log('entra dashboard');
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: error.error.message,
          });
        }
      );
  }
}

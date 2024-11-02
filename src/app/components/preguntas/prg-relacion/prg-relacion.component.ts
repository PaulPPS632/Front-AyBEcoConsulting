import { Component, Input } from '@angular/core';
import { PregRelacion } from '../../../interfaces/respuestas';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-prg-relacion',
  standalone: true,
  imports: [CdkDrag, CdkDropList],
  templateUrl: './prg-relacion.component.html',
  styleUrl: './prg-relacion.component.css',
})
export class PrgRelacionComponent {
  @Input() data: PregRelacion = {
    tipo: 'prg-relacion',
    pregunta: '',
    respuestas: [
      {
        columnA: '',
        columnB: '',
      },
    ],
    opciones: {
      columnA: [
        {
          contenido: '',
          seleccion: '',
        },
      ],
      columnB: [''],
    },
  };
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(
      this.data?.opciones.columnB,
      event.previousIndex,
      event.currentIndex
    );
  }
  /*
  // Función para seleccionar una opción de la columna A
  relacionar(indexA: number, indexB: number) {
    // Verifica si "respuestasAlumno" existe, si no, se inicializa
    if (this.data) {
      if (!this.data.respuestas) {
        this.data.respuestas = {
          columnA: [],
          columnB: [],
        };
      }

      // Relaciona la opción seleccionada de la columna B con la opción de la columna A
      this.data.respuestas.columnA[indexA].seleccion =
        this.data.respuestas.columnB[indexB].contenido;

      // Si no es múltiple, desasociar las demás respuestas de la columna A
      if (!this.data.multiple) {
        this.data.respuestas.columnA.forEach((respuesta, idx) => {
          if (idx !== indexA) {
            respuesta.seleccion = null; // Elimina las relaciones de otras opciones
          }
        });
      }
    }
  }
    */
}

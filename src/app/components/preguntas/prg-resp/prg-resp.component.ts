import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PregResp } from '../../../interfaces/respuestas';

@Component({
  selector: 'app-prg-resp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prg-resp.component.html',
  styleUrl: './prg-resp.component.css',
})
export class PrgRespComponent {
  @Input() data: PregResp = {
    tipo: 'prg-resp',
    pregunta: '',
    respuestas: [
      {
        contenido: '',
        check: false,
      },
    ],
    opciones: [],
    multiple: false,
  };
  /*
  checkpregunta(index: number, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (!this.data.respuestasAlumno) {
      this.data.respuestasAlumno = [];
    }
    const respuestaExistente = this.data.respuestasAlumno.find(
      (respuesta: any) => respuesta.opcion == this.data.opciones[index]
    );
    if (!respuestaExistente) {
      this.data.respuestasAlumno.push({
        opcion: this.data.opciones[index],
        check: checked,
      });
    } else {
      // Si existe, actualiza la respuesta
      respuestaExistente.check = checked;
    }
  }
*/

  CheckOpcionPrgResp(posicion: number) {
    if (this.data.multiple == false) {
      this.data.opciones.forEach((opcion, index) => {
        opcion.check = index === posicion; // Solo marca la opción seleccionada
      });
    }
  }
  SaveRespuestas() {
    console.log(this.data);
  }
}

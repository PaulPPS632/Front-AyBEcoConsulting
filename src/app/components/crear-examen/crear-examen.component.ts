import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { PrgRespComponent } from '../preguntas/prg-resp/prg-resp.component';
import { PregRelacion, PregResp } from '../../interfaces/respuestas';
import { PrgRelacionComponent } from '../preguntas/prg-relacion/prg-relacion.component';

@Component({
  selector: 'app-crear-examen',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    ModalComponent,
    FormsModule,
    InputComponent,
    PrgRespComponent,
    PrgRelacionComponent,
  ],
  templateUrl: './crear-examen.component.html',
  styleUrl: './crear-examen.component.css',
})
export class CrearExamenComponent {
  data: any[] = [];
  TipoPregunta = 'prg-resp';
  FlagPrgResp = false;
  FlagPrgRelacion = false;
  newPrgResp: PregResp = {
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
  newPregRela: PregRelacion = {
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

  agregarPegunta() {
    if (this.TipoPregunta == 'prg-resp') this.toggleFlagPrgResp();
    if (this.TipoPregunta == 'prg-relacion') this.toggleFlagPrgRelacion();
  }
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }
  addOpcionPrgResp() {
    this.newPrgResp.respuestas.push({ contenido: '', check: false });
  }
  addOpcionPrgRelacion() {
    this.newPregRela.respuestas.push({ columnA: '', columnB: '' });
  }
  savePrgResp() {
    this.newPrgResp.opciones = this.newPrgResp.respuestas.map((opcion) => ({
      contenido: opcion.contenido,
      check: false,
    }));
    console.log(this.newPrgResp);

    this.data.push(this.newPrgResp);

    this.newPrgResp = {
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
  }
  savePrgRelacion() {
    console.log(this.newPregRela);
    this.newPregRela.opciones.columnA = this.newPregRela.respuestas.map(
      (opcion) => ({
        contenido: opcion.columnA,
        seleccion: '',
      })
    );
    this.newPregRela.opciones.columnB = this.newPregRela.respuestas.map(
      (opcion) => opcion.columnB
    );
    this.data.push(this.newPregRela);
    this.newPregRela = {
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
  }
  CheckOpcionPrgResp(posicion: number) {
    if (this.newPrgResp.multiple == false) {
      this.newPrgResp.respuestas.forEach((respuesta, index) => {
        respuesta.check = index === posicion; // Solo marca la opción seleccionada
      });
    }
  }
  ClearCheckOpcionPrgResp() {
    this.newPrgResp.respuestas.forEach((respuesta) => {
      respuesta.check = false; // Solo marca la opción seleccionada
    });
  }
  toggleFlagPrgResp() {
    this.FlagPrgResp = !this.FlagPrgResp;
  }
  toggleFlagPrgRelacion() {
    this.FlagPrgRelacion = !this.FlagPrgRelacion;
  }
}

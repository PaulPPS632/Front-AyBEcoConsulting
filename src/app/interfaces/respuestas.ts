export interface Respuesta {
  contenido: string;
  check: boolean;
}
export interface RespuestaRelacion {
  contenido: string;
  seleccion: string | null;
}
export interface PregResp {
  tipo: string;
  pregunta: string;
  respuestas: Respuesta[];
  opciones: Respuesta[];
  multiple: boolean;
}

export interface PregRelacion {
  tipo: string;
  pregunta: string;
  /*
  respuestas: {
    columnA: RespuestaRelacion[];
    columnB: RespuestaRelacion[];
  };
  */
  respuestas: [
    {
      columnA: string;
      columnB: string;
    }
  ];
  opciones: {
    columnA: RespuestaRelacion[];
    columnB: string[];
  };
}

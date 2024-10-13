export interface Video {
  id: string;
  CursoId: string;
  antecesor: string | null;
  createdAt: string; // Puedes usar `Date` si prefieres manejar fechas como objetos
  descripcion: string;
  sucesor: string | null;
  titulo: string;
  topics: string[];
  updatedAt: string; // Puedes usar `Date` si prefieres manejar fechas como objetos
  url: string;
  urlminiatura: string | null;
  order: number | null;
}

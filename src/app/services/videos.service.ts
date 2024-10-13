import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/videos';
  headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  });
  /*
  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`, {
      headers: this.headers,
    });
  }*/
  create(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data, {
      headers: this.headers,
    });
  }
  getVideosByCurso(CursoId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/curso/${CursoId}`, {
      headers: this.headers,
    });
  }
  guardarCambiosOrdenVideos(data: any) {
    return this.http.put<any>(
      `${this.apiUrl}/guardarCambiosOrdenVideos`,
      data,
      {
        headers: this.headers,
      }
    );
  }
}

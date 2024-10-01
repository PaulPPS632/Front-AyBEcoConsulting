import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private http: HttpClient) {}

  apiUrl: string = environment.API_URL + '/cursos';
  headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  });
  /*
  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`, {
      headers: this.headers,
    });
  }*/
  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  create(data: FormData): Observable<any> {
    console.log(data);
    return this.http.post<any>(`${this.apiUrl}`, data, {
      headers: this.headers,
    });
  }
  getCoursesHome(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/home`, { headers: this.headers });
  }
}

// src/app/services/servicio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'https://tu-api.com/'; //api de servicios

  constructor(private http: HttpClient) {}

  getServicios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getServicioById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createServicio(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateServicio(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteServicio(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

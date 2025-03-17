// src/app/services/marca.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private apiUrl = 'https://tu-api.com/'; //api de marcas

  constructor(private http: HttpClient) {}

  getMarcas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getMarcaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createMarca(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateMarca(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteMarca(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

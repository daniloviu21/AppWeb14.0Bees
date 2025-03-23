// src/app/services/usuario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://82.29.197.167:3000/api/usuarios'; //api de usuarios

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getUsuarioById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createUsuario(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateUsuario(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

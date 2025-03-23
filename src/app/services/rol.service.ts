// src/app/services/rol.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private apiUrl = 'http://82.29.197.167:3000/api/Roles'; //api de roles

  constructor(private http: HttpClient) {}

  getRoles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getRolById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createRol(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateRol(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteRol(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

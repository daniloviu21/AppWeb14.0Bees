import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private apiUrl = 'http://82.29.197.167:3000/api-docs/#/Departamentos'; //api de departamento

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getDepartamentoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createDepartamento(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateDepartamento(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteDepartamento(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

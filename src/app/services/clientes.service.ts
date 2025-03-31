import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://82.29.197.167:3000/api/clientes'; //api de marcas

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getClienteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createCliente(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateCliente(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

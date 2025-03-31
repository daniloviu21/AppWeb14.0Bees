import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

private apiUrl = 'http://82.29.197.167:3000/products'; //api de departamento

  constructor(private http: HttpClient) {}

  getProducto(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getProductoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createProducto(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateProducto(id: number | null, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteDepartamento(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}

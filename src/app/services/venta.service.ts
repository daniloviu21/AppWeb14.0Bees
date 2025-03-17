import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private apiUrl = 'https://tu-api.com/'; //api de ventas

  constructor(private http: HttpClient) {}

  getVentas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getVentaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createVenta(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateVenta(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteVenta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  private apiUrl = 'https://tu-api.com/'; //api de cotizacion

  constructor(private http: HttpClient) {}

  getCotizaciones(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getCotizacionById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createCotizacion(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateCotizacion(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteCotizacion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

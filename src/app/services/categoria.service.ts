import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

// Interfaz para tipar los datos de categoría
export interface Categoria {
  id?: number;
  nombreCategoria: string;
  descripcion: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://82.29.197.167:3000/api/categorias'; // Asegura que la API es correcta

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al obtener categorías:', error);
        return throwError(() => new Error('Error al obtener categorías'));
      })
    );
  }  

  getCategoriaById(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.apiUrl}/${id}`);
  }

  createCategoria(data: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, data);
  }

  updateCategoria(id: number, data: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.apiUrl}/${id}`, data);
  }

  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, filter, map, Observable, throwError } from 'rxjs';

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


  // Aqui aniadi un filtro para que solo te regrese la categoria con un id en especifico, 
  // map permite manipular el resultado de la peticion por medio de un arreglo
  // y con find buscamos el objeto que tenga el id
  getCategoriaById(id: number): Observable<Categoria> {
    return this.http.get<Categoria[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al obtener categorías:', error);
        return throwError(() => new Error('Error al obtener categorías'));
      }),
      map((categorias: Categoria[]) => {
        const categoria = categorias.find(c => c.id == id);
        if (!categoria) {
          throw new Error(`Categoría con id ${id} no encontrada`);
        }
        return categoria;
      })
    );
  }
  

  createCategoria(data: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, data);
  }

  // cambie el tipo de dato que recibe la funcion, de "Categoria" a "any"
  updateCategoria(id: number, data: any): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.apiUrl}/${id}`, data);
  }

  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { Categoria } from './categoria.service';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

    private apiUrl = 'http://82.29.197.167:3000/api/pedidos'; // Asegura que la API es correcta
  
    constructor(private http: HttpClient) {}
  
    getPedidos(): Observable<any> {
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
    getPedidosById(id: number): Observable<any> {
      return this.http.get<any[]>(this.apiUrl).pipe(
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
    
  
    createPedido(data: Categoria): Observable<any> {
      return this.http.post<any>(this.apiUrl, data);
    }
  
    // cambie el tipo de dato que recibe la funcion, de "Categoria" a "any"
    updatePedido(id: number, data: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/${id}`, data);
    }
  
    deletePedidos(id: number): Observable<void> {
      return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
}

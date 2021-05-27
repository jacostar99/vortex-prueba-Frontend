import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';
import { Pelicula } from '../components/peliculas/pelicula';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class PeliculasService {

  private urlEndPoint: string = environment.apiUrl + '/api/pelicula';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.urlEndPoint + '/consultarTodasPeliculas');

  }

  //recibe el usuario
  crear(pelicula: Pelicula): Observable<Pelicula> {
    //como se retorna un observable de cliente, entonces en la peticion se le pasa el tipo que es usuario
    //se le pasa el usuario con los datos que se envian
    return this.http.post<Pelicula>(this.urlEndPoint + '/guardarPelicula', pelicula, { headers: this.httpHeaders }).pipe(

      catchError(e => {
        console.log(e.error.mensaje);
        swal('Error al crear la pelicula', e.error.error, 'error')
        return throwError(e);
      })

    );

  }

  obtenerPelicula(peliId: number): Observable<Pelicula> {

    return this.http.get<Pelicula>(this.urlEndPoint + '/consultarPeliculaPorId/' + peliId);

  }

  actualizar(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.put<Pelicula>(this.urlEndPoint + '/actualizarPelicula', pelicula, { headers: this.httpHeaders }).pipe(

      catchError(e => {
        console.log(e.error.mensaje);
        swal('Error al editar al usuario', e.error.mensaje, 'error')
        return throwError(e);
      })
    );
  }

  eliminar(peliId: number): Observable<Pelicula> {
    return this.http.delete<Pelicula>(this.urlEndPoint + '/eliminarPelicula/' + peliId, { headers: this.httpHeaders });
  }

}

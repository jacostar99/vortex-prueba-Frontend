import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';
import { MetodoDePago } from '../components/metodo-de-pago/metodo-de-pago';

@Injectable({
  providedIn: 'root'
})
export class MetodosDePagoService {

  private urlEndPoint: string = environment.apiUrl + '/api/metodoDePago';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  
  public getMetodosDePago(): Observable<MetodoDePago[]> {
    return this.http.get<MetodoDePago[]>(this.urlEndPoint + '/consultarTodosMetodosDePago');

  }

  //recibe el usuario
  crear(metodoDePago: MetodoDePago): Observable<MetodoDePago> {
     return this.http.post<MetodoDePago>(this.urlEndPoint + '/guardarMetodoDePago', metodoDePago, { headers: this.httpHeaders }).pipe(

      catchError(e => {
        swal('Error al crear el metodo de pago', e.error.error, 'error')
        return throwError(e);
      })

    );

  }

  obtenerMetodoDePago(pagoId: number): Observable<MetodoDePago> {

    return this.http.get<MetodoDePago>(this.urlEndPoint + '/consultarMetodoDePagoPorId/' + pagoId);

  }

  actualizar(metodoDePago: MetodoDePago): Observable<MetodoDePago> {
    return this.http.put<MetodoDePago>(this.urlEndPoint + '/actualizarMetodoDePago', metodoDePago, { headers: this.httpHeaders }).pipe(

      catchError(e => {
        console.log(e.error.mensaje);
        swal('Error al editar el metodo de pago', e.error.mensaje, 'error')
        return throwError(e);
      })
    );
  }

  eliminar(pagoId: number): Observable<MetodoDePago> {
    return this.http.delete<MetodoDePago>(this.urlEndPoint + '/eliminarMetodoDePago/' + pagoId, { headers: this.httpHeaders });
  }
}

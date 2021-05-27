import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../components/usuarios/usuario';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';

import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlEndPoint: string = environment.apiUrl + '/api/usuario';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public getUsuarios(): Observable<Usuario[]> {
    //hay que hacer un cast el resultado para que el retorno sea de tipo usuario
    //el objeto http y el metodo get siempre retornan un  objeto de tipo observable, por lo tanto
    //en la respuesta trae un json por defecto un any entonces el usuario es para hacer el cast
    //el operador map permite convertir el tipo json a tipo usuario
    return this.http.get<Usuario[]>(this.urlEndPoint + '/consultarTodos');

  }

  //recibe el usuario
  crear(usuario: Usuario): Observable<Usuario> {
    //como se retorna un observable de cliente, entonces en la peticion se le pasa el tipo que es usuario
    //se le pasa el usuario con los datos que se envian
    return this.http.post<Usuario>(this.urlEndPoint + '/guardarUsuario', usuario, { headers: this.httpHeaders }).pipe(

      catchError(e => {
        console.log(e.error.mensaje);
        swal('Error al crear al usuario', e.error.error, 'error')
        return throwError(e);
      })

    );

  }

  obtenerUsuario(userId: number): Observable<Usuario> {

    return this.http.get<Usuario>(this.urlEndPoint + '/consultarUsuarioPorId/' + userId);

  }

  obtenerUsuarioPorEmail(email:any): Observable<Usuario> {

    return this.http.get<Usuario>(this.urlEndPoint + '/consultarUsuarioPorEmail/' + email);
    
  }

  actualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.urlEndPoint + '/actualizarUsuario', usuario, { headers: this.httpHeaders }).pipe(

      catchError(e => {
        console.log(e.error.mensaje);
        swal('Error al editar al usuario', e.error.mensaje, 'error')
        return throwError(e);
      })
    );
  }

  eliminar(userId: number): Observable<Usuario> {
    return this.http.delete<Usuario>(this.urlEndPoint + '/eliminarUsuario/' + userId, { headers: this.httpHeaders });
  }




}

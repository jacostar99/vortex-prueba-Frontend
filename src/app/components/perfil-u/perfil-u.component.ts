import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../usuarios/usuario';
import { Router} from '@angular/router';

import swal from 'sweetalert2'


@Component({
  selector: 'app-perfil-u',
  templateUrl: './perfil-u.component.html',
  styleUrls: ['./perfil-u.component.css']
})
export class PerfilUComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "");



  constructor(private authFirebaseService: AuthFirebaseService,
    private usuarioService: UsuariosService,
    private router:Router) { }

  ngOnInit(): void {
    this.miPerfil();
  }

  act() {
    this.usuarioService.actualizar(this.usuario).subscribe(
      usuario => {
        swal('Usuario actualizado', `${usuario.nombre} actualizaste tu perfil con exito!`, 'success')
        this.router.navigate(['/proximos-estrenos'])
      }
    )


  }
  async miPerfil() {
    this.authFirebaseService.ofAuth.user.subscribe(
      data => {
        if (data) {
          this.usuarioService.obtenerUsuarioPorEmail(data.email).subscribe(
            data => {
              this.usuario = data;
              console.log(this.usuario);


            }
          )

        }
      }
    )
  }
}









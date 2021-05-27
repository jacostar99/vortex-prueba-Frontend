import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../usuarios/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {


  // con el ng model lo que hace es poblar con los datos del formulario al objeto usuario y sus atributos
  // el ng model es para mapear el formulario a un objeto del modelo
  usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "");

  constructor(private usuarioService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authFirebaseService: AuthFirebaseService) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  crear(): void {

    this.authFirebaseService.registerFirebase(this.usuario.email, this.usuario.contrasena).then(result => {
         this.usuario.contrasena  = result.user!.uid;
        //  this.usuario.rol = "U";

      this.usuarioService.crear(this.usuario).subscribe(
        ok => {
          //localStorage.clear();
          swal('Usuario creado', `Usuario ${this.usuario.nombre} actualizado con exito`, 'success')
          this.router.navigate(['usuarios']);
        },

      );
    }
    );
  }



  cargarUsuario(): void {
    this.activatedRoute.params.subscribe(params => {
      let userId = params['userId']
      if (userId) {
        this.usuarioService.obtenerUsuario(userId).subscribe((usuario) => {
          this.usuario = usuario
          console.log(this.usuario);
        })

      }
    })
  }

  actualizar(): void {
    this.usuarioService.actualizar(this.usuario).subscribe(
      usuario => {
        swal('Usuario actualizado', `Usuario ${usuario.nombre} actualizado con exito`, 'success')
        this.router.navigate(['/usuarios'])
      }
    )

  }

}

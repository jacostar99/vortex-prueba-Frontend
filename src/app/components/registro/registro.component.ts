import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import swal from 'sweetalert2'
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  
  usuario: Usuario = new Usuario(0, "", "", "", "", "", "", "", "U", "S");

  constructor(private usuarioService: UsuariosService,
    private authFirebaseService: AuthFirebaseService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registro() {
    this.authFirebaseService.registerFirebase(this.usuario.email, this.usuario.contrasena).then(result => {
     // this.newRegister.contrasena  = result.user.uid;
      this.usuario.rol = "U";

          this.usuarioService.crear(this.usuario).subscribe(
            ok => {
              localStorage.clear();
              swal(
                'Info',
                'Por favor verifica tu cuenta con el enlace enviado a tu correo!',
                'info'
              )
              this.router.navigate(['login']);
            },
            
          );
        }
    );
  }

  volver(){
    this.router.navigate(['login']);
  }
}

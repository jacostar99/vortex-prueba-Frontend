import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import swal from 'sweetalert2'
import { Usuario } from '../usuarios/usuario';
import { Email } from './email';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public ema: string = "";
  public pass: string = "";
  public email: Email = new Email("");
  public user: Usuario = new Usuario(0, "", "", "", "", "", "", "", "", "");


  constructor(private authFirebaseService: AuthFirebaseService,
    private usuarioService: UsuariosService,
    private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  public login(): void {

    this.authFirebaseService.loginFirebase(this.ema, this.pass).then(
      result => {
        if (result) {
          if (result.user?.emailVerified == true) {
            console.log(result);
            
            this.usuarioService.obtenerUsuarioPorEmail(this.ema).subscribe(
              user => {
                console.log(user);
                localStorage.setItem('rol', user.rol)
                localStorage.setItem('enable', user.habilitado)
                if (user.rol == 'A') {
                  this.router.navigate(['/usuarios']);
                  swal(
                    'Info',
                    `Bienvenido ${this.ema} `,
                    'info'
                  )
                } else {
                  this.router.navigate(['/proximos-estrenos']);
                  swal(
                    'Info',
                    `Bienvenido ${this.ema} `,
                    'info'
                  )
                }
              }
            )
          } else {
            swal(
              'Error',
              'Debes verificar tu email para ingresar',
              'error'
            )
          }
        }
      }
    ).catch((error) => {
      swal(
        'Error',
        'Username or password invalid',
        'error'
      )

    });

  }
}

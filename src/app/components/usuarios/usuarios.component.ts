import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from './usuario';
import swal from 'sweetalert2'


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.consultarTodos();
  }

  consultarTodos(): void {
    //asignar en el atributo usuarios el valor que se recibe desde el servidor
    this.usuarioService.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    })
  }

  
  eliminar(usuario: Usuario): void {
    swal({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar al usuario ${usuario.nombre} ${usuario.primerApellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.usuarioService.eliminar(usuario.userId).subscribe(
          response => {
            //que no muestre el usuario eliminado, si es distinto al que se va a eliminar, se muestra en la lista
           this.usuarios = this.usuarios.filter(use => use !== usuario)
            swal(
              'Usuario eliminado!',
              `Usuario ${usuario.nombre} eliminado con exito.`


            )
          }
        )
      }
    }

    )

  }

}

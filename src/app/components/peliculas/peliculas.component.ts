import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Pelicula } from './pelicula';
import swal from 'sweetalert2'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private peliculaService: PeliculasService) { }

  ngOnInit(): void {
    this.consultarTodas();
  }

  consultarTodas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    })
  }

  //aqui va el delete por que aqui esta la lista de los usuarios
  eliminar(pelicula: Pelicula): void {
    swal({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar la pelicula ${pelicula.nombre}?`,
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
        this.peliculaService.eliminar(pelicula.peliId).subscribe(
          response => {
            //que no muestre la pelicula eliminado, si es distinto al que se va a eliminar, se muestra en la lista
           this.peliculas = this.peliculas.filter(use => use !== pelicula)
            swal(
              'Pelicula eliminado!',
              `Pelicula ${pelicula.nombre} eliminado con exito.`


            )
          }
        )
      }
    }

    )

  }


}

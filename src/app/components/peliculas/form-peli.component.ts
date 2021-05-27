import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Pelicula } from './pelicula';

@Component({
  selector: 'app-form-peli',
  templateUrl: './form-peli.component.html'
})
export class FormPeliComponent implements OnInit {

  pelicula: Pelicula = new Pelicula(0, "", 0, "", new Date(), "", 0, "");

  constructor(private peliculaService: PeliculasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPeli();
  }

  crear(): void {
    this.peliculaService.crear(this.pelicula).subscribe(
      pelicula => {
        swal('Pelicula creada', `Pelicula ${pelicula.nombre} creada con exito`, 'success')
        this.router.navigate(['/admin-peliculas'])
      }

    )
  }

  actualizar(): void {
    this.peliculaService.actualizar(this.pelicula).subscribe(
      pelicula => {
        swal('Pelicula actualizada', `Pelicula ${pelicula.nombre} actualizada con exito`, 'success')
        this.router.navigate(['/admin-peliculas'])
      }
    )
  }




  cargarPeli(): void {
    this.activatedRoute.params.subscribe(params => {
      let peliId = params['peliId']
      console.log(params);
      
      if (peliId) {
        this.peliculaService.obtenerPelicula(peliId).subscribe((pelicula) => this.pelicula = pelicula)
      }
    })



  }
}


